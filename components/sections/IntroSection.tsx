"use client"
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { GrGithub, GrLinkedin } from "react-icons/gr";

export default function IntroSection() {
    const [email, setEmail] = useState("");

    useEffect(() => {
        const user = "marottaj";
        const domain = "bu.edu";
        setEmail(`${user}@${domain}`);
    }, []);

    return (
        <section
            id="intro"
            className="relative h-screen w-full flex flex-col items-center justify-center snap-start"
        >
            <div className="absolute -z-2 rounded-full border-[175px] border-b-cyan-400 border-l-rose-600 border-r-indigo-500 border-t-blue-400 blur-[300px] opacity-20" />
            <div className="flex flex-row gap-3 animate-in fade-in slide-in-from-bottom duration-[1s]">
                <Image
                    src={"/headshot.png"} 
                    alt="Headshot photo"
                    height={65}
                    width={65}
                    className="w-14 h-14 rounded-full object-cover border-2 border-none shadow-md "
                />
                <div className="mb-10">
                    <h1 className="text-muted-foreground text-sm font-bold">Hi 👋, my name is</h1>
                    <h1 className="text-white text-4xl font-bold">Joseph Marotta</h1>
                </div>
            </div>
            <Card className="max-w-md animate-in slide-in-from-bottom duration-[1s] mx-3">
                <CardContent className="text-center space-y-5">
                    <p>I am a third-year undergraduate student at Boston University studying Computer Science.</p>

                </CardContent>
                <CardFooter className="flex flex-col">
                    <p className="p-3 text-sm text-muted-foreground">Get in touch</p>

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
            <div className="animate-in fade-in slide-in-from-bottom duration-[4s] flex flex-col items-center">
                <h1 className="p-5 text-muted-foreground">Scroll down to see more</h1>
                <ArrowDown className="text-muted-foreground animate-bounce" />
            </div>

        </section>
    );
}

