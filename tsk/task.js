// ---------------- Portfolio Contact Form ----------------

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        contactForm.reset();
    });
}

// ---------------- To-Do List with Local Storage ----------------

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";
    displayTasks();
}

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${task}</span>
            <button onclick="deleteTask(${index})">Delete</button>
        `;

        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

// ---------------- Product Listing ----------------

const products = [
    {
        name: "Wireless Headphones",
        price: "₹2,499",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
        name: "Smart Watch",
        price: "₹3,999",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"
    },
    {
        name: "Gaming Mouse",
        price: "₹999",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500"
    },
    {
        name: "Laptop",
        price: "₹59,999",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
    },
    {
        name: "Bluetooth Speaker",
        price: "₹1,799",
        image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500"
    },
    {
        name: "DSLR Camera",
        price: "₹45,000",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
    }
];

const productContainer = document.getElementById("productContainer");

if (productContainer) {
    products.forEach(function (product) {

        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <button class="buy-btn">Buy Now</button>
            </div>
        `;

        productContainer.appendChild(card);
    });
}

// ---------------- Buy Button ----------------

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("buy-btn")) {
        const product =
            e.target.parentElement.querySelector("h3").textContent;

        alert(product + " added successfully!");
    }

});