import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId} = await auth();
  const isAuth = !!userId;
  if (isAuth) {
    redirect("/chat/1");
  }
  return (
    <div className="relative flex flex-col min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/background.svg"
          alt="Background Image"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          quality={100}
          priority
        />
      </div>
      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="relative h-10 w-10">
                <Image 
                  src="/Group.svg"
                  alt="Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="text-white font-bold text-xl">Judicial AI</span>
            </div>
            <nav className="flex items-center space-x-4">
              <Link href="/" className="hover:text-orange-500">Home</Link>
              <Link href="/" className="hover:text-orange-500">Contact</Link>
              {!isAuth ? (
                
                <Link href="/sign-in">
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    Login/Signup
                  </Button>
                </Link>
              ) : (
                <UserButton />
              )}
            </nav>
          </div>
        </header>
        {/* Hero */}
        <section className="flex-grow container mx-auto py-20 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2  text-left mb-8 lg:mb-0 ">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Empowering Legal Access <br />
                  with <span className="text-orange-500">AI Precision</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl">
                  Whether you&apos;re a legal professional or an individual seeking clarity, Judicial AI is your trusted partner in navigating the complexities of East African Community (EAC) law.
                </p>
                {!isAuth && (
                  <Link href="/sign-up">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3">
                      Sign up for early access 
                    </Button>
                  </Link>
                )}
              </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <Image 
                src="hero 2 2.svg"
                alt = "AI Judge"
                width={600}
                height={600}
                className="max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>
      </div>
      {/* White section with pattern overlay */}
      <div className="relative bg-white text-black" >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/subtle pattern.svg"
            alt="Pattern"
            fill
            style={{ objectFit: 'cover' , objectPosition: 'center' }}
          />
        </div>
        <div className="relative z-10">
          {/* Features Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  'Chat with legal statutes of EAC countries', 
                  'Explore case law with an AI Companion', 
                  'Government gazettements delivered into your inbox'
                ].map((feature, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4">
                        <Image 
                        src="/Vector (1).svg"
                        alt = ""
                        width={64}
                        height={64}
                        />

                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          {/* East African Law Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Legal Research in East African Laws</h2>
                <p className="text-lg max-w-3xl mx-auto">
                  Your Trusted AI Partner for Advice Across the East African Community Covering Kenya, Uganda, Tanzania, Rwanda,
                  Burundi, South Sudan, Somalia and the Democratic Republic of Congo.
                </p>

              </div>
              <div className="flex flex-col md:flex-row items-stretch gap-8 ">
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  <div className="relative w-full h-0 pb-[75%]">
                    <Image 
                    src="/EAC 2.svg" 
                    alt="Map of East Africa" 
                    fill 
                    style={{ objectFit: 'contain'}} />
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  {[
                    { icon: "/Vector.svg", text: "Comprehensive Legal Knowledge" },
                    { icon: "/Group 2.svg", text: "Multi-Format Document Support" },
                    { icon: "/Group 4.svg", text: "User-Friendly Interface"},
                    { icon: "/Group 3.svg", text: "Timely and Reliable Responses" }
                  ].map((item, index) =>(
                    <div key={index} className="flex items-center space-x-4 mb-8 last:mb-0">
                      <div className="w-8 h-8 flex-shrink-0">
                        <Image src={item.icon} alt={item.text} width={32} height={32} />
                      </div>
                      <span className="text-lg font-semibold">{item.text}</span>

                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {/* Contact Form */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-stretch gap-0 bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="w-full md:w-1/2">
                  <Image 
                    src="/media.svg" 
                    alt="Legal Professional" 
                    width={800} 
                    height={600} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-full md:w-1/2 p-8">
                  <h2 className="text-3xl font-bold mb-6">For any inquiries</h2>
                  <form className="space-y-4">
                    <Input placeholder="Name" className="bg-gray-100" />
                    <Input type="email" placeholder="Email" className="bg-gray-100" />
                    <Input placeholder="Company/Organization" className="bg-gray-100" />
                    <Textarea placeholder="Message" className="bg-gray-100 min-h-[100px]" />
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Submit</Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Footer */}
      <footer className="relative bg-black text-white py-8">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/pattern.svg"
            alt="Footer Background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="relative h-8 w-8">
              <Image 
                src="/Group.svg"
                alt="Logo"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <span className="font-bold text-xl">Judicial AI</span>
          </div>
          <div className="text-sm">
            © 2024 Judicial AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}