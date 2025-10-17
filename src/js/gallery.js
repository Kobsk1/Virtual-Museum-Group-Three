// ========================================
// ARTWORK DATA ARRAY
// ========================================
// This array contains all the artwork information that will be displayed in the gallery
// Each artwork object contains: title, year, image URL, and description
const artworks = [
    {
        title: "Kaganapan", // Name of the artwork
        year: "1953", // Year the artwork was created
        image: "https://ccp-wagtail-bucket.s3.amazonaws.com/images/V_WORKS_Kaganapan_1.width-3000.jpg",
        description: `In 1952, Abueva's sculpture Kaganapan took first place in the annual competition of the Art Association of the Philippines.
The artist reduces the female form to its most basic form, interpreting the female reproductive function as a woman's fulfillment.
The figure is a straightforward oblong that is vertically expanded, with hands and arms that are enlarged and snuggling the abdomen.
The meditative, contemplative form of a pregnant mother in its most basic physicality is the artist's stylistic focus.
A realistic observation of a strained spine and flexed abdominal muscles is revealed by the side view, indicating a nine-month wait.`
    },
    {
        title: "Transfiguration", 
        year: "1979", 
        image: "https://images.squarespace-cdn.com/content/v1/508da03be4b0d28844ddf21c/1525871090899-CPLC72G3GTCXIDP0LXJO/Himlayang-Pilipino.jpg?format=2500w", 
        description: `A well-known attraction in Baesa, Caloocan City, and other major cities with Eternal Gardens parks is the Transfiguration of Jesus Christ, which was created by National Artist for Sculpture Dean Napoleon V. Abueva.
On a 12-foot pedestal that represents the 12 apostles, it stands 33 feet tall, signifying the years that the Son of Man lived on earth.
The Transfiguration encourages humanity's pursuit of enlightenment by symbolizing faith in God and eternal life.`
    },
    {
        title: "Kiss of Judas", 
        year: "1955", 
        image: "https://media.mutualart.com/Images/2015_11/26/06/060951652/a4a2ab48-6847-493e-81d5-b7d21d66cd9f_570.Jpeg", 
        description: `When Napoleon Abueva first entered the nation's art scene in the 1950s with "The Kiss of Judas," a painting he created out of a single adobe block to represent treachery, he established his name as a master who could create timeless works from a variety of materials.
In contrast to the mathematically flawless representations of the human body that were popular at the time due to the influence of the Ancient Greeks, it demonstrated a new approach when it was awarded a prize in 1951.
He later gained recognition as a "pioneering modernist in sculpture" and was the youngest recipient of the National Artist Prize in 1976.`
    },
    {
        title: "Fredesvinda", 
        year: "1981", 
        image: "https://assets.isu.pub/document-structure/220626143954-13e4e5afab7407253a7cd908e0969479/v1/31d2538bebda294957ea000cf0f53cd3.jpeg?width=720&quality=85%2C50", 
        description: `At the 1st ASEAN Sculpture Symposium held at Fort Canning Hill in Singapore, Napoleon Abueva's sculpture, Fredesvinda, was on display.
As the skeleton of a ship, it symbolizes ASEAN unity and cooperation.`
    },
    {
        title: "Sandugo Monument", // Blood compact monument (placeholder)
        year: "1965", // Date not specified yet
        image: "https://cdn.forevervacation.com/uploads/attraction/blood-pact-shrine-3603.jpg", 
        description: `The Sandugo (Blood Compact) Monument portrays 5 life-sized bronze statues of men gathered around a table and toasting drinks with Legazpi and Sikatuna.  
        Made by National Artist Napoleon Abueva, it's an artwork that represents the first international treaty between the Philippines and Spain. 
        The spot where it stands holds historical significance, as it is where Miguel Lopez de Legaspi and Rajah Sikatuna performed a blood compact on March 16, 1565. 
        This gesture symbolizes peace and friendship between the natives of Bohol and the foreigners. ` 
    },
    {
        title: "The Crucifix with Double Corpora", 
        year: "1970s", 
        image: "https://sculptour.wordpress.com/wp-content/uploads/2015/01/mg_9557.jpg", 
        description: `The theme of perseverance in the face of adversity is effectively conveyed by the Dead Christ.
Christ's hair, which is tilted from the nape, droops to completely conceal the face, conveying a sense of isolation and defeat.
A lean groin highlighted by a plain cloth, constricted thighs and legs, chiseled ribmarks on a full chest compared to a depressed tummy, and the delineation of recesses and complexity of muscle and sinew in the outstretched arms are all ways to interpret pain and forbearance.
The drooping head's downward movement is echoed by Christ's large palms, which convey a faint sense of stress.`
    },
    {
        title: "Altar of Parish of the Holy Sacrifice", 
        year: "1979", 
        image: "https://lakansining.wordpress.com/wp-content/uploads/2018/02/05a-1955-napoleon-abueva-sermon-on-the-mount-altar-up-chapel-of-the-holy-sacrifice.jpg", 
        description: `The current marble altar was similarly designed and built by Napoleon Abueva in 1979.
One side of the sculpture shows the Sermon on the Mount, while the other side shows a scene of a simple Christian community, with a nun instructing young children and a priest standing among his parishioners.`
    }

];

// ========================================
// MODAL FUNCTIONS
// ========================================

// Function to open the artwork detail modal when a gallery item is clicked
function openModal(index) {
    // Get the modal element from the HTML
    const modal = document.getElementById('artworkModal');
    // Get the artwork data for the clicked item (index tells us which artwork)
    const artwork = artworks[index];
    
    // Update the modal content with the artwork information
    document.getElementById('modalImage').src = artwork.image; // Set the image
    document.getElementById('modalTitle').textContent = artwork.title; // Set the title
    document.getElementById('modalYear').textContent = artwork.year || 'Date not specified'; // Set year or placeholder
    document.getElementById('modalDescription').textContent = artwork.description || 'Description coming soon...'; // Set description or placeholder
    
    // Show the modal by adding the 'active' class
    modal.classList.add('active');
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

// Function to close the artwork detail modal
function closeModal() {
    // Get the modal element
    const modal = document.getElementById('artworkModal');
    // Hide the modal by removing the 'active' class
    modal.classList.remove('active');
    // Re-enable background scrolling
    document.body.style.overflow = 'auto';
}

// ========================================
// EVENT LISTENERS
// ========================================

// Close modal when clicking outside the modal content (on the dark background)
document.getElementById('artworkModal').addEventListener('click', function(e) {
    // Check if the click was on the modal background (not the content inside)
    if (e.target === this) {
        closeModal(); // Close the modal
    }
});

// Close modal when pressing the Escape key on the keyboard
document.addEventListener('keydown', function(e) {
    // Check if the pressed key is the Escape key
    if (e.key === 'Escape') {
        closeModal(); // Close the modal
    }
});