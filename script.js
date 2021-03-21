// Adding the section into a const
const container = document.querySelector(".appendChild");
// Creating a child
const paragraph = document.createElement("p");
// Creating content
const content = document.createTextNode("I was created and added by JS");
// Adding the content to the child
paragraph.appendChild(content);
// Finally adding the child and its content to the parent wich will be container
container.appendChild(paragraph);
//We can create a child, its content and append it with append like this:
const appendContainer = document.querySelector(".append");
appendContainer.append(
  "Me and my content were created and appended with append, If you are using internet explorer you maybe wont be able to see this",
  document.createElement("p")
);
// INSERT BEFORE
// In order to use this method you need the following sintaxis:
// container.insertBefore(<nodeToInsert><reference>)

// Creating the reference
const reference=document.createElement('p')
const referenceContent=document.createTextNode('I am a reference')
reference.appendChild(referenceContent)
appendContainer.appendChild(reference)
// Create node to insert
const paragraphBefore=document.createElement('p');
const paragraphBeforeContent=document.createTextNode('I was added using insertBefore')
paragraphBefore.appendChild(paragraphBeforeContent)
// Using Insert Before
appendContainer.insertBefore(paragraphBefore,reference)

//Insert adjacentElement

// Create reference
const adjacentReference=document.getElementById('adjRef')
// Create node to insert
const adjNode=document.createElement('p');
const adjNodeContent=document.createTextNode('I was added using Adjacent Insertion')
adjNode.appendChild(adjNodeContent)
// Using adjacent insertion
adjacentReference.insertAdjacentElement("af",adjNode)
