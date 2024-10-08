import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

// Define data objects
const stickyNotes = [
    {
        id: 1,
        position: { x: 50, y: 50 },
        color: "#8AC256",
        text: "This is a sticky note!",
        textStyle: { color: "#333", fontSize: "16px", fontWeight: "bold" },
    },
    {
        id: 2,
        position: { x: 150, y: 150 },
        color: "#97d2fb",
        text: "Drag me around the screen!",
        textStyle: { color: "#333", fontSize: "16px", fontWeight: "bold" },
    },
    {
        id: 3,
        position: { x: 250, y: 250 },
        color: "#fd9873",
        text: "Organize your thoughts!",
        textStyle: { color: "#333", fontSize: "16px", fontWeight: "bold" },
    },
];

const footerColumns = [
    {
        title: "Sticky Notes",
        items: [
            { href: "/", text: "Features" },
            { href: "/", text: "Pricing" },
            { href: "/", text: "About" },
            { href: "/", text: "Contact" },
        ],
    },
    {
        title: "Resources",
        items: [
            { href: "/", text: "Blog" },
            { href: "/", text: "Help Center" },
            { href: "/", text: "Tutorials" },
            { href: "/", text: "API Documentation" },
        ],
    },
    {
        title: "Legal",
        items: [
            { href: "/", text: "Terms of Service" },
            { href: "/", text: "Privacy Policy" },
            { href: "/", text: "Cookie Policy" },
        ],
    },
    {
        title: "Newsletter",
        items: [],
        newsletter: true,
    },
];

const Home = () => {
    const containerRef = useRef(null);

    const { ref: headerRef, inView: headerInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const { ref: mainRef, inView: mainInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const { ref: footerRef, inView: footerInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="bg-[#121212] text-[#fff] py-4 px-4 md:px-6 min-h-20">
                <div className="container mx-auto flex items-center justify-between">
                    <Link className="flex items-center gap-2" to="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10">
                            <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"></path>
                            <path d="M15 3v4a2 2 0 0 0 2 2h4"></path>
                        </svg>
                        <span className="text-xl md:text-4xl sm:text-2xl font-bold">
                            Sticky Notes
                        </span>
                    </Link>
                    <div className="px-2 py-1 bg-gray-100 text-[#121212] inline-block rounded-lg shadow-md">
                        <Link
                            to="/login"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                            Join Now
                        </Link>
                    </div>
                </div>
            </header>
            <main className="flex-1">
                <section className="bg-[#121212ed] text-[#fff] py-12 md:py-24 lg:py-32 min-h-[calc(100svh-5rem)]">
                    <motion.div
                        className="container mx-auto px-4 md:px-6 text-center"
                        ref={headerRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.2 }}>
                        <h1 className="text-3xl md:text-7xl font-bold mb-4">
                            Organize Your Life with Sticky Notes
                        </h1>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={headerInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1.2 }}>
                            <div className="inline-block text-left">
                                <p className="text-muted-foreground text-lg md:text-xl mb-4">
                                    Easily create, move, and manage your sticky
                                    notes on any device.
                                </p>
                                <p className="text-muted-foreground text-lg md:text-xl mb-4">
                                    Stay organized and on top of your tasks with
                                    our intuitive interface.
                                </p>
                                <p className="text-muted-foreground text-lg md:text-xl mb-8">
                                    Access your sticky notes from any device,
                                    anytime, anywhere.
                                </p>
                            </div>
                        </motion.div>
                        <div className="px-2 py-1 bg-gray-100 text-[#121212] inline-block rounded-lg shadow-md max-w-xs mx-auto mb-8">
                            <Link
                                to="/login"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-2xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                                Join Now
                            </Link>
                        </div>
                    </motion.div>
                </section>

                <section className="py-12 md:py-24 lg:py-32 bg-[#121212] text-[#fff]">
                    <motion.div
                        ref={mainRef}
                        className="relative w-10/12 mx-auto h-[500px] bg-gray-700 rounded-lg overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={mainInView ? { opacity: 1 } : {}}
                        transition={{ duration: 1.2 }}>
                        <div ref={containerRef} className="w-full h-full">
                            {stickyNotes.map((note) => (
                                <motion.div
                                    key={note.id}
                                    className="absolute w-40 h-40 rounded-md shadow-lg p-4 cursor-move flex justify-center items-center"
                                    style={{
                                        backgroundColor: note.color,
                                        top: note.position.y,
                                        left: note.position.x,
                                        color: note.textStyle.color,
                                        fontSize: note.textStyle.fontSize,
                                        fontWeight: note.textStyle.fontWeight,
                                    }}
                                    drag
                                    dragConstraints={containerRef}
                                    dragElastic={0.1}
                                    initial={{ scale: 0 }}
                                    animate={mainInView ? { scale: 1 } : {}}
                                    transition={{ duration: 1.2 }}>
                                    <p
                                        style={{
                                            color: note.textStyle.color,
                                            fontSize: note.textStyle.fontSize,
                                            fontWeight:
                                                note.textStyle.fontWeight,
                                        }}>
                                        {note.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>
            </main>
            <footer className="bg-[#121212f3] text-[#fff] py-8">
                <div className="container mx-auto px-4 md:px-6 w-10/12">
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left"
                        ref={footerRef}
                        initial={{ opacity: 0 }}
                        animate={footerInView ? { opacity: 1 } : {}}
                        transition={{ duration: 1.2 }}>
                        {footerColumns.map((column, index) => (
                            <div key={index}>
                                <p className="text-xl font-bold mb-4">
                                    {column.title}
                                </p>
                                {column.newsletter ? (
                                    <>
                                        <p className="text-muted-foreground mb-4 text-lg">
                                            Subscribe to our newsletter for
                                            updates and exclusive offers.
                                        </p>
                                        <form className="flex gap-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                                                type="email"
                                                placeholder="Enter your email"
                                            />
                                            <button
                                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                                                type="submit">
                                                Subscribe
                                            </button>
                                        </form>
                                    </>
                                ) : (
                                    <ul className="space-y-2 text-lg">
                                        {column.items.map((item, i) => (
                                            <li key={i}>
                                                <Link
                                                    className="hover:underline"
                                                    to={item.href}>
                                                    {item.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </motion.div>
                    <div className="mt-8 text-center text-muted-foreground text-base">
                        © 2024 Sticky Notes. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
