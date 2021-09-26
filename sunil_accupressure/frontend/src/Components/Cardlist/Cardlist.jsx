import React, { Component } from 'react';
import Card from '../Card/Card';
import './Cardlist.css';

class CardList extends Component {
    state = { 
        diseases:[
            { name:"जोड़ों में दर्द", image:"https://images.onlymyhealth.com/imported/images/2021/June/04_Jun_2021/slide-1_jointpain.jpg" },
            { name:"नस दबना", image:"data:image/jpeg;base64,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" },
            { name:"सर्वाइकल", image:"https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2020/07/05/589130-cervical-pain.gif?itok=rGD9iMJu" },
            { name:"हाई और लो ब्लड प्रेशर", image:"https://new-img.patrika.com/upload/2020/11/04/hbp_6502546_835x547-m.png" },
            { name:"थायरॉइड", image:"https://www.1mg.com/hi/patanjali/wp-content/uploads/2018/08/Thyroid-Gland.jpg" },
            { name:"अस्थमा", image:"https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202101/ihale_950.jpg" },
            { name:"माइग्रेन", image:"https://static.punjabkesari.in/multimedia/2018_3image_09_29_066269481migrainepain-ll.jpg"},
            { name:"मधुमेह", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTna_YUO09GkhbMNaJX6AQYHd8gavC__sbAlg&usqp=CAU" },
            { name:"मांसपेशी में दर्द", image:"https://d3pc1xvrcw35tl.cloudfront.net/sm/images/1103x827/muslec-pain-treatmetn_202008180056.jpg" },
            { name:"पैर की मोच", image:"https://www.haribhoomi.com/cms/gall_content/2018/10/ganesh_2018101613083460.jpg" },
            { name:"पक्षाघात", image:"https://assets-news-bcdn.dailyhunt.in/cmd/resize/400x400_80//fetchdata15/images/b1/ba/2a/b1ba2af7c3fda3642fdefb1f57bd7eb6.jpg" },
            { name:"लिवर के रोग", image:"https://new-img.patrika.com/upload/2019/09/03/ft_5044872_835x547-m.png" },
        ]
     }
    render() {
        return (
            <div className="card-list">
                <img className="visting" src="img.jpeg" alt="" />
                { this.state.diseases.map(disease=>{
                    return <Card key={disease.name} disease={disease} />
                })}
            </div>
        );
    }
}

export default CardList;