import React from 'react';
import './Faq.css';

function Faq() {
  const object = [
    {
        "question": "What is AM Robotics?",
        "answer": "AM Robotics is a robotics store and research center based in Hyderabad, India, specializing in various areas such as Robotics, Mechanical, Design, Embedded Systems, E-bike Development, 3D printing, electronics, and more."
    },
    {
        "question": "What services does AM Robotics offer?",
        "answer": "AM Robotics offers technical assistance, mentorship, and support for projects and ideas related to robotics, mechanical engineering, product design, industrial automation, and Internet of Things (IoT) based products."
    },
    {
        "question": "Where is AM Robotics located?",
        "answer": "AM Robotics is located at #101, Ace Ventures, Laxmi Nagar Colony Road no 1, Kothapet, Hyderabad, Telangana, India, with a shop cum research center based in Hyderabad."
    },
    {
        "question": "How can I contact AM Robotics?",
        "answer": "You can contact AM Robotics via email at support@amrobotics.in or through WhatsApp at +91-9550906016."
    },
    {
        "question": "What are the shipping policies of AM Robotics?",
        "answer": "AM Robotics ships products through reputed courier agencies and strives to ship orders within 24 hours. They provide tracking information and handle shipping-related issues promptly."
    },
    {
        "question": "What is the return policy of AM Robotics?",
        "answer": "AM Robotics has a transparent return policy lasting 7 days after delivery for products with manufacturing defects. Customers need to notify them via email within this duration for returns or exchanges."
    },
    {
        "question": "Does AM Robotics offer refunds?",
        "answer": "Yes, AM Robotics offers refunds for products with manufacturing defects or issues identified within 2 days of delivery. They also provide replacements or repairs for damaged products."
    },
    {
        "question": "What are the privacy policies of AM Robotics?",
        "answer": "AM Robotics collects personal information for transactions and store browsing, adhering to privacy standards. Customers can opt-in or withdraw consent for communication and data usage."
    },
    {
        "question": "Does AM Robotics offer technical support?",
        "answer": "Yes, AM Robotics offers technical support for projects and ideas related to robotics, mechanical engineering, embedded systems, and other areas mentioned on their website."
    },
    {
        "question": "Can I cancel or change an order with AM Robotics?",
        "answer": "Customers can request changes or cancellations for pending or processing orders by emailing support@amrobotics.in. Order cancellation may attract bank charges depending on payment methods used."
    }
];

      
    return (
        <div className='px-10 py-5 flex flex-col h-full' id='mrdiv'>
            <h1 className='text-black font-black text-2xl'>FAQ'S</h1>
            <div style={{overflow:'scroll',height:'80%'}} >
                {object.map((item, index) => (
                    <div className="collapse collapse-plus " key={index}>
                    <input type="radio" name="my-accordion-3" defaultChecked /> 
                    <div className="collapse-title text-xl font-medium">
                    {item.question}
                    </div>
                    <div className="collapse-content"> 
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
            </div>


           





        </div>
    );
}

export default Faq;
