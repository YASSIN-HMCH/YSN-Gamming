import React, {useState , useEffect } from "react";
import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCreditCard, faSmile, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";



function Cards(){
  const [backendData, setBackendData] = useState([]);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    fetch("https://ecome-ysn-vvgi-server.vercel.app/products")
      .then(response => response.json())
      .then(data => {
        setBackendData(data.products); // Store products data in state
      })
      .catch(err => console.error("Error fetching data:", err)); // Error handling
  }, []);
    const coralColor = 'rgb(252, 70, 4)'
    return(
        <>
        <div  id="Card" className="container">
          <div className="row">
              {backendData.map((p)=>{return(<div class="column">
          <div className="card">
          <img src={p.image} alt="imageys"  className="Rouge01"/>
          <p>{p.name} </p>
          <div className="card-footer">
              <span className="price">${p.Price}</span>
              <Link to={`/info/${p.id}`}>
                <button className="buy-btn-card">See More</button>
              </Link>
            </div>
          </div>
  </div>)})}
</div>
</div> 
<div className="descriptions-container" id="Carde">
        <div className="description">
          <FontAwesomeIcon icon={faTruck} size="4x" color={coralColor} />
          <h3>Livraison à Domicile</h3>
          <li>Options de livraison standard et express disponibles.</li>
          <li>Suivi en temps réel de votre commande via notre site ou application.</li>
          <li>Livraison gratuite pour les commandes dépassant un certain montant.</li>
          <li>Emballage soigné pour garantir que vos articles arrivent en parfait état.</li>
        </div>
        <div className="description">
          <FontAwesomeIcon icon={faCreditCard} size="4x"  color={coralColor} />
          <h3>Paiement</h3>
          <li>Acceptation de cartes de crédit (Visa, MasterCard), PayPal, 
            et d'autres options sécurisées , comme Apple Pay et Google Pay.</li>
          <li>Transactions 100 % sécurisées grâce à un cryptage avancé.</li>
          <li>Possibilité de paiement en plusieurs fois pour des achats importants.</li>
          <li>Facturation claire et accessible dans votre espace client.</li>
        </div>
        <div className="description">
          <FontAwesomeIcon icon={faSmile} size="4x" color={coralColor} />
          <h3>Satisfaction Client</h3>
          <li>Politique de retour flexible : retour gratuit dans les 30 jours suivant l'achat.</li>
          <li>Enquêtes de satisfaction régulières pour recueillir vos retours et suggestions.</li>
          <li>Programme de fidélité offrant des remises sur vos prochaines commandes.</li>
          <li>Accès à des conseils et guides d'achat personnalisés.</li>
        </div>
        <div className="description">
          <FontAwesomeIcon icon={faHeadset} size="4x" color={coralColor} />
          <h3>Service Client</h3>
          <li>Assistance par téléphone, email, et chat en direct, disponible 7 jours sur 7.</li>
          <li>Réponse rapide aux demandes, souvent dans un délai de moins de 24 heures.</li>
          <li>FAQ détaillée sur notre site pour des réponses rapides aux questions fréquentes.</li>
          <li>Conseillers formés pour vous aider avec des questions techniques ou des problèmes de commande.</li>
        </div>
      </div>  

        </>

    );
}
export default Cards