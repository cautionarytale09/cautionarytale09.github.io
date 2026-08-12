const facts = [
    {
        "fact": "haha get rickrolled"
    }
];

function cyclefact() {
    var random = Math.floor(Math.random() * facts.length);  // Fixed!
    var fact = facts[random];
    document.getElementById("fact").innerHTML = fact['fact'];
}
