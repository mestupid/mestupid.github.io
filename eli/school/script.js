let classes = [];

async function loadClasses() {
    const response = await fetch("classes.json");
    classes = await response.json();

    // Sort alphabetically by class name
    classes.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, {
            sensitivity: "base",
            numeric: true
        })
    );

    displayClasses(classes);
}

function displayClasses(classList) {
    const container = document.getElementById("class-list");

    container.innerHTML = "";

    for (const course of classList) {
        const element = document.createElement("div");
        element.classList.add("course");

        element.innerHTML = `
            <div class="paragraph_box">
                <div class="paragraph_box_row">
                    <p class="p_label">${course.name}</p>
                    <p class="p_label">${course.instructor}</p>
                </div>

                <div class="paragraph_box_row">
                    <p class="p_sublabel"><strong>${course.semester}</strong></p>
                    <p class="p_sublabel"><strong>${course.grade}</strong></p>
                </div>

                <p class="p_sublabel">${course.description}</p>
            </div>
        `;

        container.appendChild(element);
    }
}

loadClasses();