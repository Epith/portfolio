"use client";
import React, {useTransition, useState, use} from 'react'
import Image from "next/image";
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title:"Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>PostgreSQL</li>
                <li>AWS</li>
                <li>Javascript</li>
                <li>Go</li>
                <li>Java</li>
            </ul>
        )
    },
    {
        title:"Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Computer Science degree at Singapore Management University</li>
                <li>Diploma in Information Technology at Singapore Polytechnic</li>
            </ul>
        )
    },
    {
        title:"Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>AWS Certified Solutions Architect – Associate, AWS</li>
            </ul>
        )
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
        setTab(id);
        });
    };

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.jpg" width={500} height={500}></Image>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg '>
                    Hi! I am Kwee Cheng, pursuing a Computer Science degree at Singapore
                    Management University. I am aspiring software engineer, with a
                    versatile skill set, and willingness to learn more.
                </p>
                <div className='flex flex-row mt-8'>
                    <TabButton
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}
                        >
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}
                        >
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("certifications")}
                        active={tab === "certifications"}
                        >
                        {" "}
                        Certifications{" "}
                    </TabButton>
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t)=> t.id === tab).content}
                </div>
            </div>
            </div>
        </section>
    )
}

export default AboutSection