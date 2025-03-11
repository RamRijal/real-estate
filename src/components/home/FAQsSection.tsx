import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQsSection = () => {
    const faqs = [
        {
            question: "How do I start my home buying process?",
            answer: "Start by getting pre-approved for a mortgage, determining your budget, making a list of must-haves, and contacting one of our real estate agents who can guide you through the entire process."
        },
        {
            question: "What documents do I need when applying for a mortgage?",
            answer: "You'll typically need proof of income (pay stubs, W-2s, tax returns), proof of assets (bank statements), employment verification, credit history, and identification documents."
        },
        {
            question: "How long does the home buying process take?",
            answer: "The home buying process typically takes 30-45 days from offer acceptance to closing, but can vary based on financing, inspections, and other factors."
        },
        {
            question: "What additional costs should I budget for when buying a home?",
            answer: "Beyond the down payment, budget for closing costs (2-5% of purchase price), moving expenses, home inspection, appraisal fees, property taxes, homeowners insurance, and potential renovation costs."
        },
        {
            question: "How do I determine the right selling price for my home?",
            answer: "Our agents will conduct a comparative market analysis looking at similar properties in your area, current market conditions, and unique features of your property to recommend the optimal listing price."
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className=" md:block container-custom">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#183152]">Frequently Asked Questions</h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                    Find answers to common questions about buying, selling, and renting properties
                </p>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="hidden md:block relative h-[500px] rounded-lg overflow-hidden shadow-xl ">
                        <img
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1920&auto=format&fit=crop"
                            alt="Modern home interior"
                            className="absolute inset-0 w-full h-full object-cover "
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#B80002]/90 to-black opacity-30"></div>
                        <div className="absolute flex flex-col justify-center items-center bottom-36 left-0 right-0 p-8 text-white">
                            <h3 className="text-3xl font-bold mb-2">Still have questions?</h3>
                            <p className="mb-4">Our real estate experts are ready to help you find your perfect home.</p>
                            <a href="/contact">
                                <button className="bg-white text-[#B80002] px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                                    Contact Us
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left text-lg hover:no-underline font-medium shadow-md text-[#183152] hover:text-[#B80002]  px-4 mb-2">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 text-base px-4">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default FAQsSection;