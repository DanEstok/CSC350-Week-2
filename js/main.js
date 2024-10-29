// FAQ data in JSON format
const faqs = [
    { question: "What is JavaScript?", answer: "JavaScript makes web pages interactive." },
    { question: "What is Bootstrap?", answer: "Bootstrap is a CSS framework for responsive design." },
    { question: "How do I use Bootstrap?", answer: "Include its CSS file and add its classes to HTML elements." },
    { question: "What is an API?", answer: "An API allows applications to communicate with each other." }
];

// Function to show FAQ section
function populateFAQs() {
    const faqContainer = document.getElementById('faqContainer');
    faqContainer.innerHTML = faqs.map((faq, index) => `
        <div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                    ${faq.question}
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#faqContainer">
                <div class="accordion-body">
                    ${faq.answer}
                </div>
            </div>
        </div>
    `).join('');
}

// Run populateFAQs on page load
document.addEventListener('DOMContentLoaded', populateFAQs);
