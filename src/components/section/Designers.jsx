import React from 'react';
import RevealOnScroll from '../RevealOnScroll';

const people = [
    {
        name: 'Allison Donatto',
        role: 'Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Justin Alcendor',
        role: 'Web Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
];

export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32 flex items-center justify-center">
            <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                <RevealOnScroll className="fade-in">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl text-center">
                            Meet our leadership
                        </h2>
                        <p className="mt-6 text-lg/8 text-gray-600 px-4 text-center">
                            We are a team of passionate individuals who are dedicated to creating beautiful and functional designs that
                            inspire and empower our clients. Our team is made up of talented designers, developers, and strategists who
                            work together to bring your vision to life. We believe in the power of collaboration and creativity.
                        </p>
                    </div>
                </RevealOnScroll>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <RevealOnScroll key={person.name} className="slide-in">
                            <li>
                                <div className="flex items-center gap-x-6">
                                    <img alt="" src={person.imageUrl} className="size-16 rounded-full" />
                                    <div>
                                        <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                                    </div>
                                </div>
                            </li>
                        </RevealOnScroll>
                    ))}
                </ul>
            </div>
        </div>
    );
}
