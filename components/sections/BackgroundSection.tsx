"use client"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function BackgroundSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  // monitor when the user scrolls to this part so we can trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(entry.isIntersecting) }, // only set true so we run animation only on first scroll
      { threshold: 0.1 } // if at least 10% on page set visible = true
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
    }
  }, [])

  return (
    <section
      id="background"
      ref={ref}
      className="relative min-h-screen w-full flex flex-col items-center justify-center snap-start"
    >
      {/* background gradient */}
      <div className={`absolute -z-2 rounded-full border-[200px] border-b-cyan-400 border-l-rose-600 border-r-indigo-500 border-t-blue-400 blur-[300px] opacity-20 ${visible ? "animate-in fade-in duration-[3s]" : "opacity-0"}`} />
      <div className={`flex flex-col items-center ${visible ? "animate-in fade-in slide-in-from-bottom duration-[2s]" : "opacity-0"}`}>
        <div className="mb-10">
          <h1 className={`text-3xl font-bold`}>Background</h1>
        </div>

        <div className="flex flex-col items-center md:flex-row">
          <div className="p-5">
            <Image
              src={"/speaking.png"}
              alt="Speaking photo"
              height={500}
              width={500}
              className="w-md rounded-lg object-cover border-2 border-none shadow-md "
            />
          </div>

          <Card className="max-w-md">
            <CardContent className="space-y-5">
              <p>
                I am currently attending <span className="font-black text-red-700">Boston University</span>, where I have completed relevant coursework in
                <span className="font-black"> Data Structures</span>,
                <span className="font-black"> Analysis of Algorithms</span>, and
                <span className="font-black"> Databases & Data Mining</span>!
              </p>

              <p>I am currently a <span className="font-black">Course Assistant</span> for CS 460 (Database Systems). I&apos;m also involved in the BU AI Society and the cycling team.</p>

              <p>
                In the summer I had a great experience working as a Software Engineer Intern at <span className="font-black">Precision Combustion </span>
                and developing <span className="font-black text-[#2255D7]">MissedConnections</span>, a social media app to help the wellbeing of BU students.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="p-5 text-muted-foreground">Scroll down to read more about it and see my other projects!</h1>
          <ArrowDown className="text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
}

