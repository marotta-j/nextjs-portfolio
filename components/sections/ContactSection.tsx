"use client"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Mail } from "lucide-react";
import Link from "next/link";
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
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

  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = "marottaj";
    const domain = "bu.edu";
    setEmail(`${user}@${domain}`);
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative h-screen p-3 w-full flex flex-col items-center justify-center snap-start`}
    >
      {/* background gradient */}
      <div className={`absolute -z-2 rounded-full border-[150px] border-b-cyan-400 border-l-rose-600 border-r-indigo-500 border-t-blue-400 blur-[300px] opacity-20 ${visible ? "animate-in fade-in duration-[3s]" : "opacity-0"}`} />
      
      <div className={`flex flex-col items-center ${visible ? "animate-in fade-in slide-in-from-bottom duration-[2s]" : "opacity-0"}`}>
        <div className="mb-10">
          <h1 className={`text-3xl font-bold`}>Thank you for reading my portfolio!</h1>
        </div>
        <Card className="max-w-md animate-in slide-in-from-bottom duration-[1s] mx-3">
          <CardContent className="text-center">
            <p className="p-3">You can get in touch with me using the links below:</p>

          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="gap-3 flex flex-row w-full justify-evenly">
              <Link
                href="https://www.linkedin.com/in/marotta-joseph/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <GrLinkedin size={22} />
              </Link>

              <Link
                href="https://github.com/marotta-j"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 transition-colors"
              >
                <GrGithub size={22} />
              </Link>

              <Link
                href={`mailto:${email}`}
                className="hover:text-red-700 transition-colors"
              >
                <Mail size={22} />
              </Link>
            </div>

          </CardFooter>
        </Card>
  
        <div className="flex flex-col items-center p-5 pt-10">
          <Button asChild>
            <Link 
              className="text-muted-foreground" 
              href="https://github.com/marotta-j/nextjs-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
              <ExternalLink />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}

