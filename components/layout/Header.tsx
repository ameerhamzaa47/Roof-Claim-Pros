'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { User, Menu, X } from 'lucide-react';
import LoginModal from '@/components/auth/LoginModal';
import RegisterModal from '@/components/auth/RegisterModal';

export default function Header() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'login' | 'register'>('login');

  useEffect(() => {
    // Check if user is already logged in
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      router.push('/dashboard');
    }
  }, [router]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openModal = (mode: 'login' | 'register') => {
    setModalMode(mode);
    if (mode === 'login') {
      setIsLoginModalOpen(true);
    } else {
      setIsRegisterModalOpen(true);
    }
  };

  const closeModals = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  const switchToRegister = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const switchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-4">
              {/* Replace with your logo */}
              <div className="flex items-center space-x-3">
                <div className="relative w-24 h-24">
                  {/* Replace this with your logo */}
                  <Image src="/roofing-logo.jpeg" alt="Logo" width={128} height={128} className="object-contain h-full w-full" />
                </div>
                {/* Company Name */}
                {/* <div>
                  <h1 className="text-2xl font-bold text-[#2563eb]">
                    RoofClaimPros
                  </h1>
                  <p className="text-xs text-[#122E5F] -mt-1 font-medium">Professional Roofing Services</p>
                </div> */}
              </div>
            </div>

            {/* Desktop Navigation Items */}
            <div className="hidden md:flex items-center">
              {/* Contractor Login */}
              <button 
                onClick={() => openModal('login')}
                className="flex items-center space-x-2 bg-[#122E5F] hover:bg-[#0f2347] text-white px-6 py-2.5 rounded-lg transition-all duration-300 font-medium shadow-sm"
              >
                <User className="h-4 w-4" />
                <span className="text-sm font-semibold">Pro Login</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-blue-600 focus:outline-none p-2 rounded-lg transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 bg-white border-t border-gray-100">
              <div className="px-4 pt-4">
                <button 
                  onClick={() => {
                    openModal('login');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-[#122E5F] hover:bg-[#0f2347] text-white px-4 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  <User className="h-4 w-4" />
                  <span className="text-sm font-semibold">Pro Login</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Modals */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={closeModals} 
        onSwitchToRegister={switchToRegister} 
      />
      <RegisterModal 
        isOpen={isRegisterModalOpen} 
        onClose={closeModals} 
        onSwitchToLogin={switchToLogin} 
      />
    </>
  );
}
