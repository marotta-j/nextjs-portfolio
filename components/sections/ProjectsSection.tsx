"use client"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { SiAmazonwebservices, SiDjango, SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { CgVercel } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
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
      id="projects"
      ref={ref}
      className={`h-screen p-3 w-full flex flex-col items-center justify-center bg-background snap-start`}
    >
      <div className={`flex flex-col items-center space-y-3 ${visible ? "animate-in fade-in slide-in-from-bottom duration-[2s]" : "opacity-0"}`}>
        <h1 className={`text-3xl font-bold`}>Projects</h1>
        <div className="gap-3 flex flex-row w-full justify-evenly py-3">
          <FaPython />
          <SiDjango />
          <SiAmazonwebservices />
          <SiTypescript />
          <TbBrandReactNative />
          <RiNextjsFill />
          <RiTailwindCssFill />
          <CgVercel />
        </div>


        <Carousel className="w-full max-w-xs md:max-w-md" opts={{ loop: true }}>
          <CarouselContent>

            <CarouselItem>
              <div className="p-1">
                <Card className="max-w-md">
                  <CardHeader>
                    <CardTitle>MissedConnections</CardTitle>
                    <CardDescription>
                      A full-stack iOS application for Boston University freshman to effortlessly make new connections on campus. Created with React Native and Django.
                    </CardDescription>
                    <CardAction className="flex flex-row space-x-2">
                      <SiTypescript />
                      <TbBrandReactNative />
                      <SiDjango />
                      <SiAmazonwebservices />
                    </CardAction>
                  </CardHeader>
                  <CardContent className="flex flex-row flex-wrap w-full items-center justify-center px-4">
                    <div className="flex-1 max-w-[25%]">
                      <Image
                        src="/mc_phone.png"
                        alt="Phone"
                        width={75}
                        height={75}
                        className="object-contain w-full h-auto"
                      />
                    </div>
                    <div className="flex-1 max-w-[75%]">
                      <Image
                        src="/mc_logo.png"
                        alt="Logo"
                        width={500}
                        height={500}
                        className="object-contain w-full h-auto"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href="https://missedconnections.tech/" target="_blank">
                        Learn more
                        <ExternalLink />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="p-1">
                <Card className="max-w-md">
                  <CardHeader>
                    <CardTitle>easyPoll</CardTitle>
                    <CardDescription>
                      A Django web application for easy creation and sharing of polls.
                    </CardDescription>
                    <CardAction className="flex flex-row space-x-2">
                      <FaPython />
                      <SiDjango />
                      <SiAmazonwebservices />
                    </CardAction>
                  </CardHeader>
                  <CardContent className="flex flex-row flex-wrap w-full items-center justify-center p-6">
                    <div className="h-[200px] w-full max-w-[400px]">
                      <Image
                        src="/easypoll.png"
                        alt="Photo of web app"
                        width={200}
                        height={200}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href="https://github.com/marotta-j/easyPoll" target="_blank">
                        GitHub
                        <ExternalLink />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="p-1">
                <Card className="max-w-md">
                  <CardHeader>
                    <CardTitle>Next.js Portfolio Website</CardTitle>
                    <CardDescription>
                      The website you are on right now!
                    </CardDescription>
                    <CardAction className="flex flex-row space-x-2">
                      <SiTypescript />
                      <RiNextjsFill />
                      <RiTailwindCssFill />
                      <CgVercel />
                    </CardAction>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center p-6">

                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href="https://github.com/marotta-j/nextjs-portfolio" target="_blank">
                        GitHub
                        <ExternalLink />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>




        <div className="flex flex-col items-center">
          <h1 className="p-5 text-muted-foreground">Contact information</h1>
          <ArrowDown className="text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
}

