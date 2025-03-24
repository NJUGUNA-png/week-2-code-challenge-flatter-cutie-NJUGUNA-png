document.addEventListener("DOMContentLoaded", () => {
  const characters = [
    {
      id: 1,
      name: "Mr. Cute",
      image: "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
      votes: 0
    },
    {
      id: 2,
      name: "Mx. Monkey",
      image: "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
      votes: 0
    },
    {
      id: 3,
      name: "Ms. Zebra",
      image: "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
      votes: 0
    },
    {
      id: 4,
      name: "Dr. Lion",
      image: "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
      votes: 0
    },
    {
      id: 5,
      name: "Mme. Panda",
      image: "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
      votes: 0
    }
  ];

  const charactersBar=document.querySelector('#characters-bar')
  const name =document.querySelector('#name')
  const image=document.querySelector('#image')
  const votescount=document.querySelector('#vote-count')
  const votesform=document.querySelector('#votes-form')
  const votesinput=document.querySelector('#votes-input')
  const resetbtn=document.querySelector('#reset-btn')
});