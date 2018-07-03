const friends=[
    {id:1,name:"vincent Urbain",adresse:"rue du tour",n:245,cp:7698,ville:"Saint_symphorien",pays:"belgique",passions:[1,3,5]},
    {id:2,name:"Stéphane Meermans",adresse:"voie du cours ",n:567,cp:1050,ville:"Overijse",pays:"belgique",passions:[1,2,4]},
    {id:3,name:"Gilles Bertrand",adresse:"voie Berthe ",n:199,cp:7020,ville:"Jemappes",pays:"belgique",passions:[1,2,4]},
    {id:4,name:"Joelle hoquart",adresse:"voie Berthe ",n:199,cp:7020,ville:"Jemappes",pays:"belgique",passions:[1,2,4]},
];
const passions = [
    {id:1,title:"Football", description:"kjdshf dskjhf kqjdshf kdsqjfh kjsqdfh kqjsdfhb kjsqhdfkjdsqhkjsqd hfkjdsqhf kjdsbf qsdjkdskjf hsj"},
    {id:2,title:"Cinema", description:"kjdshf dskjhf kqjdshf kdsqjfh kjsqdfh kqjsdfhb kjsqhdfkjdsqhkjsqd hfkjdsqhf kjdsbf qsdjkdskjf hsj"},
    {id:3,title:"Lecture", description:"kjdshf dskjhf kqjdshf kdsqjfh kjsqdfh kqjsdfhb kjsqhdfkjdsqhkjsqd hfkjdsqhf kjdsbf qsdjkdskjf hsj"},
    {id:4,title:"Restaurants", description:"kjdshf dskjhf kqjdshf kdsqjfh kjsqdfh kqjsdfhb kjsqhdfkjdsqhkjsqd hfkjdsqhf kjdsbf qsdjkdskjf hsj"},
    {id:5,title:"City trips", description:"kjdshf dskjhf kqjdshf kdsqjfh kjsqdfh kqjsdfhb kjsqhdfkjdsqhkjsqd hfkjdsqhf kjdsbf qsdjkdskjf hsj"},
]

const renderMarkup =(template_id,data)=>{
    const templateStrings = [
        {id:1,markup:`<li onclick="generateFriendDetails(${data.id})"><a>${data.name}</a></li>`},
        {id:2,markup:`
        <div class="card-image">
                            <figure class="image is-3by1">
                                <img src="https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/3.8394433999999364,50.4345059,9.67,0.00,0.00/433x144@2x?access_token=pk.eyJ1IjoidHJpcHR5ayIsImEiOiJjamo1ZWJuYnQxc3Z0M2tuM2ltMnNhZG9oIn0.ba1o5OxBs_kwIsdntxda1A"
                                    alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">${data.name}</p>
                                    <p class="subtitle is-6">vincent@triptyk.eu</p>
                                </div>
                            </div>
                            <div class="content">
                                ${data.adresse}, N°${data.n}
                                <br/> ${data.cp} ${data.ville}
                                <br /> ${data.pays}
                            </div>
                        </div>
        `},
    ];
    return templateStrings.find(template =>template.id === template_id).markup
}

const  generateFriendDetails = function(friend_id){
    $('#friend_detail').innerHTML=renderMarkup(2,friends.find(friend => friend.id === friend_id));
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