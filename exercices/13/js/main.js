const friends=[
    {name:"vincent Urbain",adresse:"rue du tour",n:245,cp:7698,ville:"Saint_symphorien",pays:"belgique",passions:[1,3,5]},
    {name:"Stéphane Meermans",adresse:"voie du cours ",n:567,cp:1050,ville:"Overijse",pays:"belgique",passions:[1,2,4]},
    {name:"Gilles Bertrand",adresse:"voie Berthe ",n:199,cp:7020,ville:"Jemappes",pays:"belgique",passions:[1,2,4]},
    {name:"Joelle hoquart",adresse:"voie Berthe ",n:199,cp:7020,ville:"Jemappes",pays:"belgique",passions:[1,2,4]},
];

const renderMarkup =(template_id,data)=>{
    const templateStrings = [
        {id:1,markup:` <li><a>${data.name}</a></li>`},
    ];
    return templateStrings.find(template =>template.id === template_id).markup

}
const generateFriendsList = () =>{
    const list = $('#friends_list')
    let list_markup= friends.reduce((markup,friend)=>{
        return `${markup}${renderMarkup(1,friend)}`
    },'')
    list.innerHTML = list_markup


}
const createjQueryLike =()=>{
   window.$ = document.querySelector.bind(document); 
   window.$$ = document.querySelectorAll.bind(document); 
}
const init=()=>{
    createjQueryLike()
    generateFriendsList()
}

init()