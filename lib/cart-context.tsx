'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product } from './products';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
}

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; selectedSize: string } }
  | { type: 'REMOVE_ITEM'; payload: { productId: string; selectedSize: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; selectedSize: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartState };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === action.payload.product.id && item.selectedSize === action.payload.selectedSize
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        return {
          ...state,
          items: updatedItems,
          total: calculateTotal(updatedItems)
        };
      }

      const newItems = [...state.items, { 
        product: action.payload.product, 
        quantity: 1, 
        selectedSize: action.payload.selectedSize 
      }];
      return {
        ...state,
        items: newItems,
        total: calculateTotal(newItems)
      };
    }

    case 'REMOVE_ITEM': {
      const filteredItems = state.items.filter(
        item => !(item.product.id === action.payload.productId && item.selectedSize === action.payload.selectedSize)
      );
      return {
        ...state,
        items: filteredItems,
        total: calculateTotal(filteredItems)
      };
    }

    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return cartReducer(state, {
          type: 'REMOVE_ITEM',
          payload: { productId: action.payload.productId, selectedSize: action.payload.selectedSize }
        });
      }

      const updatedItems = state.items.map(item =>
        item.product.id === action.payload.productId && item.selectedSize === action.payload.selectedSize
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems)
      };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0 };

    case 'LOAD_CART':
      return action.payload;

    default:
      return state;
  }
};

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
};

interface CartContextType {
  state: CartState;
  addItem: (product: Product, selectedSize: string) => void;
  removeItem: (productId: string, selectedSize: string) => void;
  updateQuantity: (productId: string, selectedSize: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('wonderful-paws-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wonderful-paws-cart', JSON.stringify(state));
  }, [state]);

  const addItem = (product: Product, selectedSize: string) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, selectedSize } });
  };

  const removeItem = (productId: string, selectedSize: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, selectedSize } });
  };

  const updateQuantity = (productId: string, selectedSize: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, selectedSize, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getItemCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      state,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      getItemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};