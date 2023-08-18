
var content = "hung Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam perspiciatis earum in maxime voluptatibus asperiores inventore autem laudantium culpa saepe, sapiente obcaecati voluptatem dignissimos eveniet sit impedit et cum modi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus, deserunt eius hic fuga expedita accusamus cupiditate esse nemo tempora explicabo temporibus sed. Alias saepe accusantium cumque minus reprehenderit! Sed! loremhung hun";

var spaceIndex = content.indexOf(" ");
var result = "";
// var result = content.slice(0, spaceIndex);

while (spaceIndex !== -1) {
    result += content.slice(0, spaceIndex);

    content = content.slice(spaceIndex);

    spaceIndex = content.indexOf(" ");
} 

result += content;



document.write(result);



