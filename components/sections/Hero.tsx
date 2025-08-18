'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, CheckCircle, Shield, Award, Star, Phone, MapPin, Clock } from 'lucide-react';

export default function Hero() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    zipCode: '',
    phoneNumber: '',
    email: '',
    firstName: '',
    lastName: '',
    insuredBy: '',
    policyNumber: ''
  });

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.zipCode.trim() !== '';
      case 2:
        return formData.firstName.trim() !== '' &&
               formData.lastName.trim() !== '' &&
               formData.phoneNumber.trim() !== '' &&
               formData.email.trim() !== '' &&
               isValidEmail(formData.email);
      case 3:
        return formData.insuredBy.trim() !== '' &&
               formData.policyNumber.trim() !== '';
      default:
        return false;
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  
  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('🎉 Success! A certified roofing expert will contact you within 15 minutes to schedule your free inspection.');
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Professional Roofing Background */}
      <div className="absolute inset-0">
        <Image
          src="/BG-Image.png"
          alt="Professional roofing services"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/75"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6 h-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-6 items-center h-full">
          {/* Left Content */}
          <div className="text-white space-y-3 lg:space-y-4 order-1 lg:order-1">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-blue-600 px-3 py-1.5 rounded-full text-xs font-semibold">
              <Shield className="mr-1.5 h-3 w-3 text-white" />
              <span className="text-white">Licensed & Insured in All 50 States</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-white">
                  Get Your Roof
                </span>
                <br />
                <span className="text-[#2563eb]">
                  100% Covered
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl lg:block hidden">
                Professional roofing experts help homeowners get insurance-covered roof replacements with 
                <span className="text-[#2563eb] font-semibold"> zero out-of-pocket costs</span>.
              </p>
            </div>

            {/* Professional Features - Hidden on mobile, shown after form */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-2">
                <CheckCircle className="h-4 w-4 text-[#2563eb] flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold text-xs">99.7% Success Rate</div>
                  <div className="text-xs text-gray-400">Insurance Claims Approved</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-2">
                <Award className="h-4 w-4 text-[#2563eb] flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold text-xs">A+ BBB Rating</div>
                  <div className="text-xs text-gray-400">Trusted by Thousands</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-2">
                <MapPin className="h-4 w-4 text-[#2563eb] flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold text-xs">Nationwide Service</div>
                  <div className="text-xs text-gray-400">All 50 States Coverage</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-2">
                <Clock className="h-4 w-4 text-[#2563eb] flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold text-xs">24-Hour Response</div>
                  <div className="text-xs text-gray-400">Emergency Available</div>
                </div>
              </div>
            </div>

            {/* Call to Action - Hidden on mobile, shown after form */}
            <div className="hidden lg:block bg-[#122E5F]/20 backdrop-blur-sm border border-[#2563eb]/30 rounded-xl p-3">
              <div className="flex items-center justify-center mb-1">
                <Phone className="h-4 w-4 text-[#2563eb] mr-1.5" />
                <span className="text-[#2563eb] font-bold text-sm">Call Now for Immediate Service</span>
              </div>
              <div className="text-center">
                <a 
                  href="tel:1-800-ROOF-PRO"
                  className="text-xl md:text-2xl font-bold text-white hover:text-[#2563eb] transition-colors"
                >
                  1-800-ROOF-PRO
                </a>
              </div>
              <div className="text-blue-200 text-xs text-center mt-1">
                Available 24/7 for emergency roof repairs
              </div>
            </div>
          </div>

          {/* Professional Form */}
          <div className="relative order-2 lg:order-2 w-full">
            <div className="bg-white rounded-2xl shadow-2xl p-4">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-[#122E5F] rounded-xl flex items-center justify-center">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                  Free Roof Inspection
                </h2>
                <p className="text-gray-600 text-sm">
                  Step {currentStep} of 3 • Get your claim started in 60 seconds
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-[#2563eb] h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span className={currentStep >= 1 ? 'text-blue-600 font-semibold' : ''}>Location</span>
                  <span className={currentStep >= 2 ? 'text-blue-600 font-semibold' : ''}>Contact Info</span>
                  <span className={currentStep >= 3 ? 'text-blue-600 font-semibold' : ''}>Insurance</span>
                </div>
              </div>

              {/* Form Steps */}
              <div className="space-y-3">
                {/* Step 1: ZIP Code */}
                {currentStep === 1 && (
                  <div className="space-y-3">
                    <label className="block text-gray-700 font-semibold mb-2 text-left text-sm">
                      📍 Property ZIP Code
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your ZIP code"
                      className="w-full px-3 py-2.5 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] text-gray-900 placeholder-gray-500 transition-all duration-300"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      required
                    />
                    <p className="text-xs text-gray-500">We'll check for recent storm activity in your area</p>
                  </div>
                )}

                {/* Step 2: Contact Info */}
                {currentStep === 2 && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-1 text-left text-sm">
                          First Name
                        </label>
                        <input
                          type="text"
                          placeholder="John"
                          className="w-full px-3 py-2.5 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] text-gray-900 placeholder-gray-500 transition-all duration-300"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-1 text-left text-sm">
                          Last Name
                        </label>
                        <input
                          type="text"
                          placeholder="Smith"
                          className="w-full px-3 py-2.5 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] text-gray-900 placeholder-gray-500 transition-all duration-300"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-1 text-left text-sm">
                        📱 Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="w-full px-3 py-2.5 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] text-gray-900 placeholder-gray-500 transition-all duration-300"
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-1 text-left text-sm">
                        📧 Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-3 py-2.5 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] text-gray-900 placeholder-gray-500 transition-all duration-300"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Insurance Info */}
                {currentStep === 3 && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1 text-left text-sm">
                        🏢 Insurance Company
                      </label>
                      <input
                        type="text"
                        placeholder="State Farm, Allstate, USAA, etc."
                        className="w-full px-3 py-2.5 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] text-gray-900 placeholder-gray-500 transition-all duration-300"
                        value={formData.insuredBy}
                        onChange={(e) => handleInputChange('insuredBy', e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-1 text-left text-sm">
                        📋 Policy Number
                      </label>
                      <input
                        type="text"
                        placeholder="Your insurance policy number"
                        className="w-full px-3 py-2.5 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] text-gray-900 placeholder-gray-500 transition-all duration-300"
                        value={formData.policyNumber}
                        onChange={(e) => handleInputChange('policyNumber', e.target.value)}
                        required
                      />
                    </div>

                    {/* What Happens Next */}
                    <div className="bg-blue-50 border border-[#2563eb]/20 rounded-xl p-3">
                      <h3 className="text-[#122E5F] font-bold mb-2 flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-1.5" />
                        What Happens Next
                      </h3>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#2563eb] rounded-full"></div>
                          <span className="text-gray-700">Expert roof inspection within 24 hours</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#2563eb] rounded-full"></div>
                          <span className="text-gray-700">Insurance claim filed on your behalf</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#2563eb] rounded-full"></div>
                          <span className="text-gray-700">Professional roof replacement if approved</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#2563eb] rounded-full"></div>
                          <span className="text-gray-700">You pay only your insurance deductible</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex space-x-3 mt-4">
                  {currentStep > 1 && (
                    <button
                      onClick={prevStep}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>Back</span>
                    </button>
                  )}
                  
                  <button
                    onClick={currentStep === 3 ? handleSubmit : nextStep}
                    disabled={!isStepValid()}
                    className="flex-1 bg-[#122E5F] hover:bg-[#0f2347] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                  >
                    {currentStep === 3 ? (
                      <>
                        <Shield className="h-4 w-4" />
                        <span>Get My Free Inspection</span>
                      </>
                    ) : (
                      <>
                        <span>Continue</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center mt-3">
                  🔒 Your information is secure and will never be shared
                </p>
              </div>
            </div>
          </div>

          {/* Mobile-only content after form */}
          <div className="lg:hidden text-white space-y-3 order-3">
            {/* Mobile description */}
            <p className="text-sm text-gray-300 leading-relaxed text-center">
              Professional roofing experts help homeowners get insurance-covered roof replacements with 
              <span className="text-[#2563eb] font-semibold"> zero out-of-pocket costs</span>.
            </p>

            {/* Mobile Professional Features */}
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-2">
                <CheckCircle className="h-4 w-4 text-[#2563eb] flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold text-sm">99.7% Success Rate</div>
                  <div className="text-xs text-gray-400">Insurance Claims Approved</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-2">
                <Award className="h-4 w-4 text-[#2563eb] flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold text-sm">A+ BBB Rating</div>
                  <div className="text-xs text-gray-400">Trusted by Thousands</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-2">
                <MapPin className="h-4 w-4 text-[#2563eb] flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold text-sm">Nationwide Service</div>
                  <div className="text-xs text-gray-400">All 50 States Coverage</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-2">
                <Clock className="h-4 w-4 text-[#2563eb] flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold text-sm">24-Hour Response</div>
                  <div className="text-xs text-gray-400">Emergency Available</div>
                </div>
              </div>
            </div>

            {/* Mobile Call to Action */}
            <div className="bg-[#122E5F]/20 backdrop-blur-sm border border-[#2563eb]/30 rounded-xl p-3">
              <div className="flex items-center justify-center mb-1">
                <Phone className="h-4 w-4 text-[#2563eb] mr-1.5" />
                <span className="text-[#2563eb] font-bold text-sm">Call Now for Immediate Service</span>
              </div>
              <div className="text-center">
                <a 
                  href="tel:1-800-ROOF-PRO"
                  className="text-lg md:text-xl font-bold text-white hover:text-[#2563eb] transition-colors"
                >
                  1-800-ROOF-PRO
                </a>
              </div>
              <div className="text-blue-200 text-xs text-center mt-1">
                Available 24/7 for emergency roof repairs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}