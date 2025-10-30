// ********** Read More / Show Less Button **********
const buttons = document.querySelectorAll('.read-more-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const post = button.parentElement;
        let p = post.querySelector('p');
        const fullText = " This is additional content added via JavaScript for demonstration purposes.";
        if (button.textContent === "Read More") {
            p.textContent += fullText;
            button.textContent = "Show Less";
        } else {
            p.textContent = p.textContent.replace(fullText, '');
            button.textContent = "Read More";
        }
    });
});

// ********** CV Section Toggle **********
const cvHeader = document.querySelector('#cv h2');
cvHeader.addEventListener('click', () => {
    const lists = document.querySelectorAll('#cv ul');
    lists.forEach(list => {
        list.style.display = (list.style.display === "none") ? "block" : "none";
    });
});

// ********** Back to Top Button **********
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTop.style.display = (window.scrollY > 200) ? "block" : "none";
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ********** Light/Dark Mode Toggle **********
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// ********** Blog Post Dates **********
const postDates = document.querySelectorAll('.post-date');
postDates.forEach(date => {
    date.textContent = new Date().toLocaleDateString();
});

// ********** Alert on Social Link Click **********
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        alert(`You are leaving the page to visit: ${link.textContent}`);
    });
});
