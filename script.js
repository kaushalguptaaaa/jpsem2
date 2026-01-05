const timetableData = [
    {
        time: '09:00 - 10:00',
        monday: null,
        tuesday: { subject: 'SDF-2', type: 'Lecture', teacher: 'Dr. Ankita Wadhwa', room: 'TS10', code: 'sdf' },
        wednesday: null,
        thursday: { subject: 'Workshop', type: 'Tutorial', teacher: 'Mr. Shwetabh Singh', room: 'TS10', code: 'workshop' },
        friday: null,
        saturday: { subject: 'SDF Lab', type: 'Lab (2 hrs)', teacher: 'Ms. Anupama / Dr. Anita', room: 'CL01', code: 'sdf', span: 2 }
    },
    {
        time: '10:00 - 11:00',
        monday: null,
        tuesday: { subject: 'Physics Lab-2', type: 'Lab (2 hrs)', teacher: 'Prof. Rakesh Kumar Dwivedi', room: 'PL1', code: 'physics', span: 2 },
        wednesday: { subject: 'Maths-2', type: 'Lecture', teacher: 'Dr. Rupali Srivastava', room: 'TS8', code: 'maths' },
        thursday: { subject: 'SDF-2', type: 'Lecture', teacher: 'Dr. Ankita Wadhwa', room: 'FF2', code: 'sdf' },
        friday: null,
        // Saturday is skipped due to span
    },
    {
        time: '11:00 - 12:00',
        monday: null,
        // Tuesday skipped due to span
        wednesday: { subject: 'Physics-2', type: 'Lecture', teacher: 'Prof. Rakesh Kumar Dwivedi', room: 'TS8', code: 'physics' },
        thursday: { subject: 'UHV', type: 'Lecture', teacher: 'Dr. Indu Chawla', room: 'FF2', code: 'uhv' },
        friday: { subject: 'Physics-2', type: 'Lecture', teacher: 'Prof. Rakesh Kumar Dwivedi', room: 'G1', code: 'physics' },
        saturday: { subject: 'Maths-2', type: 'Tutorial', teacher: 'Dr. Rupali Srivastava', room: 'FF3', code: 'maths' }
    },
    { type: 'lunch' },
    {
        time: '01:00 - 02:00',
        monday: null,
        tuesday: { subject: 'Maths-2', type: 'Tutorial', teacher: 'Dr. Rupali Srivastava', room: 'FF1', code: 'maths' },
        wednesday: { subject: 'Maths-2', type: 'Lecture', teacher: 'Dr. Rupali Srivastava', room: 'FF3', code: 'maths' },
        thursday: { subject: 'Workshop Lab', type: 'Lab (2 hrs)', teacher: 'Mr. Shwetabh Singh', room: 'EW1', code: 'workshop', span: 2 },
        friday: { subject: 'UHV', type: 'Lecture', teacher: 'Dr. Indu Chawla', room: 'TS13', code: 'uhv' },
        saturday: null
    },
    {
        time: '02:00 - 03:00',
        monday: { subject: 'UHV', type: 'Tutorial', teacher: 'Dr. Meenal', room: 'FF2', code: 'uhv' },
        tuesday: { subject: 'SDF-2', type: 'Lecture', teacher: 'Dr. Ankita Wadhwa', room: 'FF1', code: 'sdf' },
        wednesday: { subject: 'Physics-2', type: 'Tutorial', teacher: 'Prof. Rakesh Kumar Dwivedi', room: 'G1', code: 'physics' },
        // Thursday skipped due to span
        friday: null,
        saturday: null
    },
    {
        time: '03:00 - 04:00',
        monday: { subject: 'SDF-2', type: 'Lecture', teacher: 'Dr. Ankita Wadhwa', room: 'FF2', code: 'sdf' },
        tuesday: { subject: 'Physics-2', type: 'Tutorial', teacher: 'Prof. Rakesh Kumar Dwivedi', room: 'G1', code: 'physics' },
        wednesday: { subject: 'Life Skills', type: 'Lab (2 hrs)', teacher: 'Dr. Paridhi', room: 'LL', code: 'lifeskills', span: 2 },
        thursday: null,
        friday: null,
        saturday: null
    },
    {
        time: '04:00 - 05:00',
        monday: null,
        tuesday: null,
        // Wednesday skipped due to span
        thursday: null,
        friday: null,
        saturday: null
    }
];

const materialsData = [
    {
        subject: 'Maths-2',
        code: 'maths',
        teacher: 'Dr. Rupali Srivastava',
        sections: [
            {
                type: 'folder',
                title: 'Lecture Notes',
                items: [
                    { name: 'Lecture Notes 1-11', url: 'pdf/maths/Lecture 1-11.pdf' },
                    { name: 'Lecture Notes 12-21', url: 'pdf/maths/Lecture 12-21.pdf' },
                    { name: 'Lecture Notes 22-42', url: 'pdf/maths/Lecture 22-42.pdf' }
                ]
            },
            'Practice Problems',
            {
                type: 'folder',
                title: 'Predicted Question Paper',
                items: [
                    { name: 'Maths Model Paper T1', url: 'pdf/maths/Maths model paper T1.pdf' }
                ]
            },
            {
                type: 'folder',
                title: 'Tutorial Questions',
                items: [
                    { name: 'Tutorial 1', url: 'pdf/maths/tut1.pdf' },
                    { name: 'Tutorial 2', url: 'pdf/maths/tut2.pdf' },
                    { name: 'Tutorial 3', url: 'pdf/maths/tut3.pdf' },
                    { name: 'Tutorial 4', url: 'pdf/maths/tut4.pdf' },
                    { name: 'Tutorial 5', url: 'pdf/maths/tut5.pdf' },
                    { name: 'Tutorial 6', url: 'pdf/maths/tut6.pdf' },
                    { name: 'Tutorial 7', url: 'pdf/maths/tut7.pdf' },
                    { name: 'Tutorial 8', url: 'pdf/maths/tut8.pdf' },
                    { name: 'Tutorial 9', url: 'pdf/maths/tut9.pdf' },
                    { name: 'Tutorial 10', url: 'pdf/maths/tut10.pdf' },
                    { name: 'Tutorial 11', url: 'pdf/maths/tut11.pdf' },
                    { name: 'Tutorial 12', url: 'pdf/maths/tut12.pdf' },
                    { name: 'Tutorial 13', url: 'pdf/maths/tut13.pdf' }
                ]
            }
        ]
    },
    {
        subject: 'Physics-2',
        code: 'physics',
        teacher: 'Prof. Rakesh Kumar Dwivedi',
        sections: ['Theory Notes', 'Derivations', 'Lab Manual', 'Numerical Practice', 'Viva Questions']
    },
    {
        subject: 'SDF-2',
        code: 'sdf',
        teacher: 'Dr. Ankita Wadhwa',
        sections: ['Lecture Slides', 'Assignments', 'Case Studies', 'Project References']
    },
    {
        subject: 'UHV',
        code: 'uhv',
        teacher: 'Dr. Indu Chawla, Dr. Meenal',
        sections: ['Reading Material', 'Reflection Questions', 'Presentation Topics', 'Attendance-Critical Notes']
    },
    {
        subject: 'Workshop',
        code: 'workshop',
        teacher: 'Mr. Shwetabh Singh',
        sections: ['Tool Guides', 'Practical Sheets', 'Evaluation Criteria']
    },
    {
        subject: 'Life Skills',
        code: 'lifeskills',
        teacher: 'Dr. Paridhi',
        sections: ['Activity Sheets', 'Communication Exercises', 'Self-Assessment Tasks']
    },
    {
        subject: 'SDF Lab',
        code: 'sdf',
        teacher: 'Ms. Anupama Padha, Dr. Anita Sahoo',
        sections: ['Lab Manual', 'Experiment Steps', 'Observation Format', 'Submission Guidelines']
    }
];

const mainContent = document.getElementById('main-content');
const btnTimetable = document.getElementById('btn-timetable');
const btnMaterial = document.getElementById('btn-material');
const btnTheme = document.getElementById('btn-theme');

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    btnTheme.textContent = isDark ? '☀️' : '🌙';
}

function switchMode(mode) {
    if (mode === 'timetable') {
        btnTimetable.classList.add('active');
        btnMaterial.classList.remove('active');
        renderTimetable();
    } else {
        btnTimetable.classList.remove('active');
        btnMaterial.classList.add('active');
        renderMaterials();
    }
}

function renderTimetable() {
    let html = `
        <div class="timetable-view fade-in">
            <div class="grid-header">TIME</div>
            <div class="grid-header">MONDAY</div>
            <div class="grid-header">TUESDAY</div>
            <div class="grid-header">WEDNESDAY</div>
            <div class="grid-header">THURSDAY</div>
            <div class="grid-header">FRIDAY</div>
            <div class="grid-header">SATURDAY</div>
    `;

    // Track vertical spans: { monday: 0, tuesday: 0, ... }
    let activeSpans = {
        monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0
    };

    timetableData.forEach(row => {
        if (row.type === 'lunch') {
            html += `<div class="lunch-break-row">
                        <span>🍱</span> LUNCH BREAK (12:00 - 01:00)
                     </div>`;
        } else {
            // Time Slot
            html += `<div class="time-slot">${row.time}</div>`;

            // Days
            ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].forEach(day => {
                // Check if this column is currently blocked by a span
                if (activeSpans[day] > 0) {
                    activeSpans[day]--;
                    return;
                }

                const classData = row[day];

                if (classData) {
                    const spanClass = classData.span ? 'span-2' : '';
                    if (classData.span) {
                        activeSpans[day] = classData.span - 1;
                    }
                    html += `
                        <div class="class-card ${classData.code} ${spanClass}">
                            <div class="subject-name">${classData.subject} <span class="room-badge">${classData.room}</span></div>
                            <div class="class-type">${classData.type}</div>
                            <div class="teacher-name">
                                ${classData.teacher}
                            </div>
                        </div>
                    `;
                } else {
                    html += `<div class="free-period">Free Period</div>`;
                }
            });
        }
    });

    html += `</div>`;
    mainContent.innerHTML = html;
}

function renderMaterials() {
    let html = `<div class="material-view fade-in">`;

    materialsData.forEach((item, index) => {
        // Generate a random-ish code for the badge if not existing, or just use subject code
        const codeNumber = 100 + index + 25; // Example: 125, 126...

        html += `
            <div class="material-card ${item.code}" style="animation: slideUpFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards ${index * 100}ms; opacity: 0;">
                
                <!-- Header -->
                <div class="mat-header">
                    <div class="mat-header-top">
                        <div class="mat-subject">${item.subject}</div>
                        <div class="mat-code-badge">CODE: ${codeNumber}</div>
                    </div>
                    <div class="mat-teacher">
                        ${item.teacher}
                    </div>
                </div>

                <!-- List -->
                <div class="resource-list">
                    ${item.sections.map(section => {
            if (typeof section === 'object' && section.type === 'folder') {
                // --- FOLDER / ACCORDION ITEM ---
                return `
                            <div class="folder-group">
                                <div class="resource-item folder-header" onclick="toggleFolder(this)">
                                    <div class="resource-left">
                                        <span class="folder-icon">📂</span>
                                        <span class="resource-name">${section.title}</span>
                                    </div>
                                    <span class="arrow-icon folder-arrow">›</span>
                                </div>
                                <div class="folder-content">
                                    ${section.items.map(file => `
                                        <a href="${file.url}" target="_blank" class="file-row">
                                            <div class="resource-left">
                                                <span class="file-icon">📄</span>
                                                <span class="resource-name">${file.name}</span>
                                            </div>
                                            <span class="download-icon">⬇</span>
                                        </a>
                                    `).join('')}
                                </div>
                            </div>
                            `;
            } else {
                // --- NORMAL TEXT ITEM ---
                // (Handling legacy strings)
                return `
                            <div class="resource-item">
                                <div class="resource-left">
                                    <span class="folder-icon">📂</span>
                                    <span class="resource-name">${section}</span>
                                </div>
                                <span class="arrow-icon">›</span>
                            </div>
                            `;
            }
        }).join('')}
                </div>

                <!-- Footer Action -->
                <button class="view-all-btn">View All Resources ›</button>

            </div>
        `;
    });

    html += `</div>`;
    mainContent.innerHTML = html;
}

// Initial render
renderTimetable();
updateStatusCards();
setInterval(updateStatusCards, 60000); // Update every minute

function updateStatusCards() {
    const now = new Date();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentDay = days[now.getDay()];
    // const currentDay = 'monday'; // Testing

    // Format current time as HH:MM for comparison
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();

    // Helper to check if time is within a slot range "HH:MM - HH:MM"
    // Assuming strictly 9-5 schedule for simplicity as per data

    let currentClassData = null;
    let nextClassData = null;

    // Flatten the schedule for the current day to find comparison
    // We need to parse the "09:00 - 10:00" strings to logic

    // Simple Mapping for the 1-hour blocks provided
    const timeSlots = [
        { start: 9, end: 10, index: 0 },
        { start: 10, end: 11, index: 1 },
        { start: 11, end: 12, index: 2 },
        { start: 12, end: 13, type: 'lunch' },
        { start: 13, end: 14, index: 3 }, // 1 PM
        { start: 14, end: 15, index: 4 }, // 2 PM
        { start: 15, end: 16, index: 5 }, // 3 PM
        { start: 16, end: 17, index: 6 }, // 4 PM
    ];

    let currentIndex = -1;

    // Find what slot we are in
    for (let i = 0; i < timeSlots.length; i++) {
        const slot = timeSlots[i];
        if (currentHour === slot.start) {
            currentIndex = i;
            break;
        }
    }

    // Determine Current Class
    const currentTitleEl = document.getElementById('current-class');
    const currentDetailsEl = document.getElementById('current-details');

    if (currentDay === 'sunday') {
        currentTitleEl.textContent = "Weekend";
        currentDetailsEl.textContent = "Enjoy your day off!";
    } else if (currentHour < 9 || currentHour >= 17) {
        currentTitleEl.textContent = "No classes now";
        currentDetailsEl.textContent = "College is over for today";
    } else if (currentIndex !== -1) {
        const slot = timeSlots[currentIndex];

        if (slot.type === 'lunch') {
            currentTitleEl.textContent = "Lunch Break";
            currentDetailsEl.textContent = "12:00 PM - 1:00 PM";
        } else {
            // Get data from timetableData
            const row = timetableData[slot.index];
            const data = row[currentDay];

            // Handle row spans? 
            // The data structure has the class in the starting cell.
            // If we are in a spanning cell (e.g. 2nd hour of a span), data might be null in that specific row
            // We need to check previous rows for Spans if current is null?
            // Actually, in our structure:
            // 9-10: data is set. 
            // 10-11: if span was 9-10 (span 2), this row might be null or handled. 
            // Let's resolve the actual class object considering spans.

            let resolvedData = data;

            // Check if a previous slot spanned into this one
            // Go backwards from current index
            for (let back = 1; back <= 2; back++) { // Check up to 2 hours back just in case
                if (slot.index - back >= 0) {
                    const prevRow = timetableData[slot.index - back];
                    const prevData = prevRow[currentDay];
                    if (prevData && prevData.span && prevData.span > back) {
                        resolvedData = prevData;
                        break;
                    }
                }
            }

            if (resolvedData) {
                currentTitleEl.textContent = resolvedData.subject;
                currentDetailsEl.textContent = `${resolvedData.type} • ${resolvedData.room || ''} • ${resolvedData.teacher || ''}`;
            } else {
                currentTitleEl.textContent = "Free Period";
                currentDetailsEl.textContent = "Time to study or relax";
            }
        }
    } else {
        // Fallback
        currentTitleEl.textContent = "Free Period";
        currentDetailsEl.textContent = "-";
    }

    // Determine Next Class
    // Look at currentIndex + 1
    const nextTitleEl = document.getElementById('next-class');
    const nextDetailsEl = document.getElementById('next-details');

    if (currentDay === 'sunday' || currentHour >= 16) {
        nextTitleEl.textContent = "No upcoming class";
        nextDetailsEl.textContent = "-";
    } else {
        const nextIndex = currentIndex + 1;
        if (nextIndex < timeSlots.length) {
            const nextSlot = timeSlots[nextIndex];

            if (nextSlot.type === 'lunch') {
                nextTitleEl.textContent = "Lunch Break";
                nextDetailsEl.textContent = "12:00 PM";
            } else {
                // Same logic for resolving data
                let resolvedNext = timetableData[nextSlot.index][currentDay];
                for (let back = 1; back <= 2; back++) {
                    if (nextSlot.index - back >= 0) {
                        const prevRow = timetableData[nextSlot.index - back];
                        const prevData = prevRow[currentDay];
                        // If it spans into the NEXT slot
                        // If we are at index `target`, and `prev` was at `target-back` with span `S`
                        // It covers if `S > back`
                        // Wait, if it spans INTO next, it means it started BEFORE next and covers next.
                        // Yes.
                        if (prevData && prevData.span && prevData.span > back) {
                            resolvedNext = prevData; // It's a continuation of the same class
                            // Maybe say "Continuining: Subject"? Or just the subject.
                            resolvedNext = { ...resolvedNext, type: "Continuing: " + resolvedNext.type };
                            break;
                        }
                    }
                }

                if (resolvedNext) {
                    nextTitleEl.textContent = resolvedNext.subject;
                    nextDetailsEl.textContent = `${resolvedNext.type} • ${resolvedNext.room || ''}`;
                } else {
                    nextTitleEl.textContent = "Free Period";
                    nextDetailsEl.textContent = "-";
                }
            }
        } else {
            nextTitleEl.textContent = "No upcoming class";
            nextDetailsEl.textContent = "-";
        }
    }
}

function toggleFolder(headerElement) {
    const folderGroup = headerElement.parentElement;
    folderGroup.classList.toggle('open');
}
