const root = document.getElementById('news-root');
const moreBtn = document.getElementById('news-more');

let nextUrl = globalThis.NEWS_FEED_URL;

function formatDateParts(iso) {
    const d = new Date(iso);
    return {
        top: d.getFullYear(),
        bottom: d.toLocaleDateString('en-GB', {day: 'numeric', month: 'short'})
    };
}

function renderItem(item) {
    const {top, bottom} = formatDateParts(item.date);

    const el = document.createElement('div');
    el.className = 'news-item';
    el.innerHTML = `
        <div class="date">
            <span class="top">${top}</span>
            <span class="bottom">${bottom}.</span>
        </div>
        <div>
            <p class="bold">${item.title}</p>
            <div>${item.content}</div>
        </div>
    `;

    root.appendChild(el);
}

async function loadFeed(url) {
    if (!url) return;

    const res = await fetch(url, {
        headers: {'Accept': 'application/json'}
    });

    if (!res.ok) {
        throw new Error('Failed to load news feed');
    }

    const data = await res.json();

    (data.items || []).forEach(renderItem);

    nextUrl = data.next || null;
    moreBtn.hidden = !nextUrl;
}

moreBtn.addEventListener('click', () => loadFeed(nextUrl));

// Initial load
try {
    await loadFeed(nextUrl);
} catch (e) {
    console.error(e);
}
