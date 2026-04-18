// Sample Data
const temples = [
    // CHOLA NADU (1-40)
    { id: 1, name: "Sri Ranganathaswamy Temple", nadu: "Chola", place: "Srirangam, Trichy", link: "d-d-1.html" },
    { id: 2, name: "Azhagiya Manavalan Temple", nadu: "Chola", place: "Uraiyur, Trichy", link: "dd-2.html" },
    { id: 3, name: "Uthamar Kovil", nadu: "Chola", place: "Uthamar Koil, Trichy", link: "dd-3.html" },
    { id: 4, name: "Pundarikakshan Perumal Temple", nadu: "Chola", place: "Thiruvellarai, Trichy", link: "dd-4.html" },
    { id: 5, name: "Vadivazhagiya Nambi Temple", nadu: "Chola", place: "Anbil, Trichy", link: "dd-5.html" },
    { id: 6, name: "Appakkudathaan Perumal Temple", nadu: "Chola", place: "Koviladi, Trichy", link: "dd-6.html" },
    { id: 7, name: "Hara Saaba Vimocchana Perumal", nadu: "Chola", place: "Thirukandiyur, Thanjavur", link: "dd-7.html" },
    { id: 8, name: "Jakath Rakshaka Perumal temple", nadu: "Chola", place: "Vadakurangaduthurai, Thanjavur", link: "dd-8.html" },
    { id: 9, name: "Gajendra Varadha Perumal Temple", nadu: "Chola", place: "Kapisthalam, Thanjavur", link: "dd-9.html" },
    { id: 10, name: "Valvil Ramar Temple", nadu: "Chola", place: "Thirupullabhoothangudi, Thanjavur", link: "dd-10.html" },
    { id: 11, name: "Andalakkum Aiyan Temple", nadu: "Chola", place: "Thiruaadanoor, Kumbakonam", link: "dd-11.html" },
    { id: 12, name: "Sarangapani Temple", nadu: "Chola", place: "Kumbakonam", link: "dd-12.html" },
    { id: 13, name: "Oppiliappan Temple", nadu: "Chola", place: "Thirunageswaram, Kumbakonam", link: "dd-13.html" },
    { id: 14, name: "Saranatha Perumal Temple", nadu: "Chola", place: "Thirucheri, Kumbakonam", link: "dd-15.html" },
    { id: 15, name: "Thirunarayur Nambi Temple", nadu: "Chola", place: "Thirunarayur, Thanjavur", link: "dd-14.html" },
    { id: 16, name: "Bhaktavatsala Perumal temple", nadu: "Chola", place: "Thirukannamangai, Thiruvarur", link: "dd-16.html" },
    { id: 17, name: "Thalai Sanga Nanmathiyam", nadu: "Chola", place: "Thalachangadu, Mayiladuthurai", link: "dd-17.html" },
    { id: 18, name: "Thiru Devanaar Thogai", nadu: "Chola", place: "Sirkazhi, Mayiladuthurai", link: "dd-18.html" },
    { id: 19, name: "Azhagiyasingar Temple", nadu: "Chola", place: "Thiruvali, Mayiladuthurai", link: "dd-19.html" },
    { id: 20, name: "Vedarajan temple", nadu: "Chola", place: "Thirunagari, Mayiladuthurai", link: "dd-20.html" },
    { id: 21, name: "Neelamegha Perumal Temple", nadu: "Chola", place: "Thirukkannapuram", link: "dd-21.html" },
    { id: 22, name: "Sowriraja Perumal Temple", nadu: "Chola", place: "Thirukkannapuram", link: "dd-22.html" },
    { id: 23, name: "Soundararajaperumal Temple", nadu: "Chola", place: "Thiru Naagai", link: "dd-23.html" },
    { id: 24, name: "Devaadi Raja Perumal temple", nadu: "Chola", place: "Thiruvazhundur", link: "dd-24.html" },
    { id: 25, name: "Parimala Ranganathar Perumal", nadu: "Chola", place: "Thiruvindhalur, Mayiladuthurai", link: "dd-25.html" },
    { id: 26, name: "Kazheesirama Vinnagaram", nadu: "Chola", place: "Sirkazhi", link: "dd-26.html" },
    { id: 27, name: "Thirukkavalampadi", nadu: "Chola", place: "Thirunangur", link: "dd-27.html" },
    { id: 28, name: "Thiruarimeya Vinnagaram", nadu: "Chola", place: "Thirunangur", link: "dd-28.html" },
    { id: 29, name: "Thiruvannipurushothamam", nadu: "Chola", place: "Sirkazhi", link: "dd-29.html" },
    { id: 30, name: "Thirusemponsey Kovil", nadu: "Chola", place: "Thirunangur", link: "dd-30.html" },
    { id: 31, name: "Thirumanimada Kovil", nadu: "Chola", place: "Sirkazhi", link: "dd-31.html" },
    { id: 32, name: "Thiruvaikunda Vinnagaram", nadu: "Chola", place: "Sirkazhi", link: "dd-32.html" },
    { id: 33, name: "Thiruthevanarthogai", nadu: "Chola", place: "Sirkazhi", link: "dd-33.html" },
    { id: 34, name: "Thiruthetriyambalam", nadu: "Chola", place: "Thirunangur", link: "dd-34.html" },
    { id: 35, name: "Thirumanikkoodam", nadu: "Chola", place: "Thirunangur", link: "dd-35.html" },
    { id: 36, name: "Adhirangam Ranganathaswamy temple", nadu: "Chola", place: "Adhi Thiruvarangam, Kallakurichi", link: "dd-36.html" },
    { id: 37, name: "Thiruvellakkulam", nadu: "Chola", place: "Sirkazhi", link: "dd-37.html" },
    { id: 38, name: "Thiruparthanpalli", nadu: "Chola", place: "Parthanpalli", link: "dd-38.html" },
    { id: 39, name: "Thiru Chithrakoodam", nadu: "Chola", place: "Chidambaram", link: "dd-39.html" },
    { id: 40, name: "Thirukkannangudi", nadu: "Chola", place: "Nagapattinam", link: "dd-40.html" },

    // NADU NADU (41-42)
    { id: 41, name: "Deivanayaka Perumal Temple", nadu: "Nadu", place: "Thiruvahindrapuram, Cuddalore", link: "dd-41.html" },
    { id: 42, name: "Trivikrama Perumal Temple", nadu: "Nadu", place: "Tirukoilur, Villupuram", link: "dd-42.html" },

    // PANDIYA NADU (43-60)
    { id: 43, name: "Koodal Azhagar Temple", nadu: "Pandiya", place: "Madurai", link: "dd-43.html" },
    { id: 44, name: "Kallazhagar Temple", nadu: "Pandiya", place: "Alagar Koyil, Madurai", link: "dd-44.html" },
    { id: 45, name: "Kaalamegha Perumal Temple", nadu: "Pandiya", place: "Thirumohoor, Madurai", link: "dd-45.html" },
    { id: 46, name: "Sathyagirinathar Temple", nadu: "Pandiya", place: "Thirumayam, Pudukkottai", link: "dd-46.html" },
    { id: 47, name: "Sowmya Narayana Perumal", nadu: "Pandiya", place: "Thirukoshtiyur, Sivagangai", link: "dd-47.html" },
    { id: 48, name: "Adi Jagannatha Perumal", nadu: "Pandiya", place: "Thiruppullani, Ramanathapuram", link: "dd-48.html" },
    { id: 49, name: "Thiruthankaal Appan", nadu: "Pandiya", place: "Thiruthankaal, Sivakasi", link: "dd-49.html" },
    { id: 50, name: "Vatapatrasayi Temple", nadu: "Pandiya", place: "Srivilliputhur", link: "dd-50.html" },
    { id: 51, name: "Thirutholaiyavillimangalam", nadu: "Pandiya", place: "Thoothukudi", link: "dd-51.html" },
    { id: 52, name: "Sri Vaikuntanathar", nadu: "Pandiya", place: "Srivaikuntam, Thoothukudi", link: "dd-52.html" },
    { id: 53, name: "Vijayasana Perumal", nadu: "Pandiya", place: "Varagunamangai, Thoothukudi", link: "dd-53.html" },
    { id: 54, name: "Bhoovaraha Perumal", nadu: "Pandiya", place: "Thirupulinkudi, Thoothukudi", link: "dd-54.html" },
    { id: 55, name: "Devapiran Temple", nadu: "Pandiya", place: "Thiruthelaiyavillimangalam, Thoothukudi", link: "dd-55.html" },
    { id: 56, name: "Aravindalochanar", nadu: "Pandiya", place: "Thirutholaiyavillimangalam, Thoothukudi", link: "dd-56.html" },
    { id: 57, name: "Thirukkulanthai", nadu: "Pandiya", place: "Perungulam, Thoothukudi", link: "dd-57.html" },
    { id: 58, name: "Vaithaamanidhi Perumal", nadu: "Pandiya", place: "Thirukkolur, Thoothukudi", link: "dd-58.html" },
    { id: 59, name: "Aadhinatha Perumal", nadu: "Pandiya", place: "Alwarthirunagari, Thoothukudi", link: "dd-59.html" },
    { id: 60, name: "Thirukurungudi Nambi", nadu: "Pandiya", place: "Thirukurungudi", link: "dd-60.html" },

    // MALAYALA NADU (61-73)
    { id: 61, name: "Thiruvananthapuram Padmanabhaswamy", nadu: "Malayala", place: "Trivandrum", link: "dd-61.html" },
    { id: 62, name: "Thiruvattar Adi Kesava", nadu: "Malayala", place: "Thiruvattar, Kanyakumari", link: "dd-62.html" },
    { id: 63, name: "Thiruvazhmarban", nadu: "Malayala", place: "Thiruppathisaram, Kanyakumari", link: "dd-63.html" },
    { id: 64, name: "Thirukatkarai Appan", nadu: "Malayala", place: "Ernakulam", link: "dd-64.html" },
    { id: 65, name: "Thirumoozhikkulam", nadu: "Malayala", place: "Ernakulam", link: "dd-65.html" },
    { id: 66, name: "Thiruvalla Vallabha", nadu: "Malayala", place: "Pathanamthitta", link: "dd-66.html" },
    { id: 67, name: "Thirukkadithanam", nadu: "Malayala", place: "Kottayam", link: "dd-67.html" },
    { id: 68, name: "Thiruchengannur", nadu: "Malayala", place: "Alappuzha", link: "dd-68.html" },
    { id: 69, name: "Thirupuliyur", nadu: "Malayala", place: "Alappuzha", link: "dd-69.html" },
    { id: 70, name: "Thiruvaranmula", nadu: "Malayala", place: "Pathanamthitta", link: "dd-70.html" },
    { id: 71, name: "Thiruvanvandoor", nadu: "Malayala", place: "Alappuzha", link: "dd-71.html" },
    { id: 72, name: "Thiruvenkitachalapathy", nadu: "Malayala", place: "Thrissur", link: "dd-72.html" },
    { id: 73, name: "Thirunavaya Navamukunda", nadu: "Malayala", place: "Malappuram", link: "dd-73.html" },

    // TONDAI NADU (74-95)
    { id: 74, name: "Kanchi Varadharaja Perumal", nadu: "Tondai", place: "Kanchipuram", link: "dd-74.html" },
    { id: 75, name: "Ashtabujakaram", nadu: "Tondai", place: "Kanchipuram", link: "dd-75.html" },
    { id: 76, name: "Thiruthanka Deepa Prakasar", nadu: "Tondai", place: "Kanchipuram", link: "dd-76.html" },
    { id: 77, name: "Thiruelukkai Azhagiya Singar", nadu: "Tondai", place: "Kanchipuram", link: "dd-77.html" },
    { id: 78, name: "Thirukalvanoor", nadu: "Tondai", place: "Kanchipuram", link: "dd-78.html" },
    { id: 79, name: "Thirupavalavannam", nadu: "Tondai", place: "Kanchipuram", link: "dd-79.html" },
    { id: 80, name: "Thirupadagam Pandava Thoothar", nadu: "Tondai", place: "Kanchipuram", link: "dd-80.html" },
    { id: 81, name: "Thirunilaaththingalthundam", nadu: "Tondai", place: "Kanchipuram", link: "dd-81.html" },
    { id: 82, name: "Thiruooragam Ulagalantha Perumal", nadu: "Tondai", place: "Kanchipuram", link: "dd-82.html" },
    { id: 83, name: "Thiruneeragam", nadu: "Tondai", place: "Kanchipuram", link: "dd-83.html" },
    { id: 84, name: "Thirukkaragam", nadu: "Tondai", place: "Kanchipuram", link: "dd-84.html" },
    { id: 85, name: "Thirukkarvaanam", nadu: "Tondai", place: "Kanchipuram", link: "dd-85.html" },
    { id: 86, name: "Thiruparameswara Vinnagaram", nadu: "Tondai", place: "Kanchipuram", link: "dd-86.html" },
    { id: 87, name: "Thiruvekka Yathothkari", nadu: "Tondai", place: "Kanchipuram", link: "dd-87.html" },
    { id: 88, name: "Thiruthankaal", nadu: "Tondai", place: "Kanchipuram", link: "dd-88.html" },
    { id: 89, name: "Thirukalvanoor", nadu: "Tondai", place: "Kanchipuram", link: "dd-89.html" },
    { id: 90, name: "Thiruputhkuzhi", nadu: "Tondai", place: "Kanchipuram", link: "dd-90.html" },
    { id: 91, name: "Thirunindravur Bakthavatsala", nadu: "Tondai", place: "Chennai", link: "dd-91.html" },
    { id: 92, name: "Thiruevvulur Veeraraghava", nadu: "Tondai", place: "Tiruvallur", link: "dd-92.html" },
    { id: 93, name: "Thiruvidanthai Nitya Kalyana", nadu: "Tondai", place: "Chennai", link: "dd-93.html" },
    { id: 94, name: "Thirukkadalmallai", nadu: "Tondai", place: "Mahabalipuram", link: "dd-94.html" },
    { id: 95, name: "Parthasarathy Temple", nadu: "Tondai", place: "Triplicane, Chennai", link: "dd-95.html" },

    // VADA NADU (96-106)
    { id: 96, name: "Tirumala Venkateswara Temple", nadu: "Vada", place: "Tirupati", link: "dd-96.html" },
    { id: 97, name: "Ahobilam Nava Narasimha", nadu: "Vada", place: "Ahobilam, Andhra Pradesh", link: "dd-97.html" },
    { id: 98, name: "Thiruvadhari Badrinath", nadu: "Vada", place: "Uttarakhand", link: "dd-98.html" },
    { id: 99, name: "Thiruchalagramam Muktinath", nadu: "Vada", place: "Nepal", link: "dd-99.html" },
    { id: 100, name: "Thirunaimisaranyam", nadu: "Vada", place: "Uttar Pradesh", link: "dd-100.html" },
    { id: 101, name: "Thirupirudhi", nadu: "Vada", place: "Joshimath", link: "dd-101.html" },
    { id: 102, name: "Thirukandamennum Kadinagar", nadu: "Vada", place: "Devaprayag", link: "dd-102.html" },
    { id: 103, name: "Thiru Ayodhya", nadu: "Vada", place: "Uttar Pradesh", link: "dd-103.html" },
    { id: 104, name: "Thiru Dwaraka", nadu: "Vada", place: "Gujarat", link: "dd-104.html" },
    { id: 105, name: "Thiru Vadamathura", nadu: "Vada", place: "Mathura", link: "dd-105.html" },
    { id: 106, name: "Thiruvayippadi", nadu: "Vada", place: "Gokul", link: "dd-106.html" },

    // CELESTIAL (107-108)
    { id: 107, name: "Thirupparkadal", nadu: "Celestial", place: "Ocean of Milk", link: "dd-107.html" },
    { id: 108, name: "Paramapadam", nadu: "Celestial", place: "Vaikuntam", link: "dd-108.html" }

];

const exploreBtn = document.getElementById('exploreBtn');
const explorerSection = document.getElementById('explorerSection');
const templeGrid = document.getElementById('templeGrid');
const naduFilter = document.getElementById('naduFilter');
const placeSearch = document.getElementById('placeSearch');

// 1. Show Explorer on click
exploreBtn.addEventListener('click', () => {
    explorerSection.classList.remove('hidden');
    renderTemples(temples);
    explorerSection.scrollIntoView({ behavior: 'smooth' });
});


// 3. Filter Logic
function filterData() {
    const region = naduFilter.value;
    const searchText = placeSearch.value.toLowerCase();

    const filtered = temples.filter(t => {
        const matchesRegion = region === 'all' || t.nadu === region;
        const matchesPlace = t.place.toLowerCase().includes(searchText) || 
                             t.name.toLowerCase().includes(searchText);
        return matchesRegion && matchesPlace;
    });

    renderTemples(filtered);
}

naduFilter.addEventListener('change', filterData);
placeSearch.addEventListener('input', filterData);

// Updated Render Function
function renderTemples(data) {
    const templeGrid = document.getElementById('templeGrid'); // Mee HTML lo unna grid ID
    templeGrid.innerHTML = data.map((t, i) => `
        <a href="dd-${t.id}.html" style="text-decoration: none; color: inherit;">
            <div class="card temple-card" style="cursor: pointer;">
                <div class="temple-info">
                    <span class="nadu-tag" style="color: #800000; font-weight: bold; font-size: 0.8rem;">
                        ${t.nadu} Nadu
                    </span>
                    <h3 style="margin: 10px 0; color: #333;">${t.name}</h3>
                    <p style="font-size: 0.9rem; color: #666;">
                        <i class="fas fa-map-marker-alt"></i> ${t.place}
                    </p>
                </div>
            </div>
        </a>
    `).join('');
}