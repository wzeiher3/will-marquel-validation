function renderList(){
    ('filter').html(`<button class="dropbtn">Dropdown</button>
    <div class="dropdown-content">
        <input type="radio" id="1star" name="1star" value="1star">
        <label for="1star">1 Star</label><br>
        <input type="radio" id="2stars" name="2stars" value="2stars">
        <label for="2stars">2 Stars</label><br>
        <input type="radio" id="3stars" name="3stars" value="3stars">
        <label for="3stars">3 Stars</label><br>
        <input type="radio" id="4stars" name="4stars" value="4stars">
        <label for="4stars">4 Stars</label><br>
        <input type="radio" id="5stars" name="5stars" value="5stars">
        <label for="5stars">5 Stars</label><br>
    </div>`);
}