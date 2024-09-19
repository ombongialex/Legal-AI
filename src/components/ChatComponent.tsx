"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FileUpload from './FileUpload';
import Link from "next/link";
import Image from "next/image";
import { Search, HelpCircle, Send, Mic, Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { Card, CardContent } from "@/components/ui/card";


const countries = [
  { name: 'Kenya', logo: '/kenya-logo.svg' }, 
  { name: 'Tanzania', logo: '/tanzania-logo.svg'}, 
  { name: 'Somalia', logo: '/somali-logo.svg' }, 
  { name: 'Uganda', logo: '/uganda-logo.svg' }, 
  { name: 'South Sudan', logo: '/south-sudan-logo.svg' }, 
  { name: 'Burundi', logo: '/burundi-logo.svg' }, 
  { name: 'Rwanda', logo: '/rwanda-logo.svg' }, 
  { name: 'DRC Congo', logo: '/drc-congo-logo.svg' }, 
]


type Props = {};

const ChatComponent = (props: Props) => {
  const [selectedCountry, setSelectedCountry ] = useState('Kenya')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-md text-sm font-medium mr-2">Standard Plan</span>
            <Button variant="link" className="text-orange-600 text-sm hidden sm:inline-flex">Upgrade plan</Button>
          </div>
          <div className="flex-1 max-w-xl mx-4 hidden md:block">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"/>
              <Input type="text" placeholder="Search" className="pl-8 pr-4" />
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" className="flex items-center space-x-1 sm:inline-flex">
              <span className="text-sm font-medium">Help</span>
               <HelpCircle className="h-5 w-5"/>
            </Button>
            <div className="ml-2">
              <UserButton />
            </div>
            <Button variant="ghost" className="ml-2 sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden bg-white p-4">
            <Button variant="link" className="text-orange-600 text-sm w-full justify-start mb-2">Upgrade plan</Button>
            <Button variant="ghost" className="w-full justify-start mb-2">
              <span className="text-sm font-medium mr-2">Help</span>
              <HelpCircle className="h-5 w-5"/>
            </Button>
            <div className="relative mt-2">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"/>
              <Input type="text" placeholder="Search" className="pl-8 pr-4 w-full" />
            </div>
          </div>
        )}
      </header>
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-orange-600 mb-4">Judicial AI</h1>
          <p className="text-lg sm:text-xl mb-8">Comprehensive Legal Coverage of 8 East African Countries</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Card className="border-2 hover:border-orange-600 transition-colors">
              <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center h-full">
                <p className="text-center font-medium">Chat with legal statues of EAC countries</p>
              </CardContent>
            </Card>
            <Card className="bg-orange-600 text-white">
              <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center h-full">
                <p className="text-center font-medium">Explore case law with an AI companion</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-orange-600 transition-colors">
              <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center h-full">
                <p className="text-center font-medium">Government gazettements delivered into your inbox</p>
              </CardContent>
            </Card>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Select Country</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
            {countries.map((country) => (
              <Button
                key={country.name}
                variant={selectedCountry === country.name ? "default" : "outline"}
                className={`justify-start h-10 sm:h-12 text-sm sm:text-base ${selectedCountry === country.name ? 'bg-orange-600 hover:bg-orange-700' : ''}`}
                onClick={() => setSelectedCountry(country.name)}
              >
                <Image 
                  src={country.logo} 
                  alt={`${country.name} logo`} 
                  width={24} 
                  height={24} 
                  className="w-4 h-4 sm:w-6 sm:h-6 mr-1 sm:mr-2"
                />
                <span className="truncate">{country.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t p-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative flex items-center">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <FileUpload />
            </div>
            <Input
              type="text"
              placeholder="attach file or send a message"
              className="flex-1 pl-12 pr-24 py-2 sm:py-3"  
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 hidden sm:inline-flex">
                <Mic className="h-5 w-5 text-gray-400"/>
              </Button>
              <Button size="icon" className="bg-orange-600 hover:bg-orange-700 h-8 w-8 rounded-full">
                <Send className="h-5 w-5 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
};

export default ChatComponent;

