import React,{useState} from 'react'
import './styles/App.css'
import './styles/mobile.css'
import ProductRow from './components/ProductRow'
import Category from './components/Category'
import Categories from './components/Categories'
import Header from './components/Header'
import Footer from './components/Footer'
                           // data.map(x=> <Category key={x.id} name={x.category}/>).reduce((items, item) => items.find(x => x.category === item.category) ? [...items] : [...items, item])

                            // data.map(x=> <Category key={x.id} name={x.category}/>)
                            // .filter((value, index, self) => self.indexOf(value) === index)
function App() {
    const IS_IN_GITHUB_PAGES = true;
    const data = [
        {id:1,title:"Panquecas",description:"Panquecas com mel", category:["café da manhã"], price:8.00, img:"/images/pancakes.jpeg"},
        {id:2,title:"Espaguete",description:"Macarrão espaguete ao molho rústico e bacons", category:["massa","almoço"], price:14.99, img:"/images/pasta-1.jpg"},
        {id:3,title:"Frango grelhado",description:"Com acompanhamentos", category:["almoço"], price:12.99, img:"/images/chicken.jpg"},
        {id:4,title:"Milkshake de morango",description:"500ml", category:["milkshake", "sobremesas"], price:10.00, img:"/images/milkshake-1.png"},
        {id:5,title:"Sanduíche natural",description:"Pão, salada, queijo e presunto", category:["sanduíche"], price:6.50, img:"/images/sanduiche.jpg"},
        {id:6,title:"Nhoque de mandioca",description:"Nhoque de Mandioca", category:["almoço", "massa"], price:10.00, img:"/images/nhoque.jpg"},
        {id:7,title:"feijoada",description:"Feijada com acompanhamentos", category:["almoço"], price:11.00, img:"/images/feijoada.jpg"},
        {id:8,title:"suco de laranja",description:"350ml", category:["bebidas"], price:10.00, img:"/images/suco-de-laranja.jpg"},
        {id:9,title:"água",description:"500ml", category:["bebidas"], price:2.00, img:"/images/agua.jpg"},
        {id:10,title:"refrigerante",description:"500ml", category:["bebidas"], price:5.00, img:"/images/refrigerante.jpg"},
        {id:11,title:"açaí",description:"Acompanha granola e banana fatiada", category:["sobremesas"], price:5.00, img:"/images/acai.jpg"},
        {id:12,title:"café preto",description:"200ml", category:["café da manhã"], price:2.00, img:"/images/cafe.jpg"},
    ]
    if(IS_IN_GITHUB_PAGES){
        data.forEach(c=>c.img="/landing-e-commerce"+c.img)
    }
    const [produtos, setProdutos] = useState(data)

    function setCategory(category){
        if(category === "Todas") return setProdutos(data);
        setProdutos(data.filter(x=>x.category.includes(category)))

    }
    return (
        <>
            <Header/>
            <main className="main">
                <section className="menu-title">Título Menu</section>
                <section className="main-section">

                    <h2>Categorias</h2>

                    <Categories setCategory={setCategory} data={data}/>

                    <div className="product-container">
                        
                        {
                            produtos.map(x=>{ 
                                return  <ProductRow key={x.id}
                                            title={x.title}  
                                            img={x.img}
                                            description={x.description}
                                            price={x.price} />
                            })
                        }
                    </div>

                </section>

            </main>
            <Footer/>
        </>
    )
}

export default App
