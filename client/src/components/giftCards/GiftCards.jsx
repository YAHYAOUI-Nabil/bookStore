import './giftCards.css'
import GiftCardsLogo from '../../assets/gift-card.png'

const GiftCards = () => {
  const amount = 0;
  return (
    <div className='giftcards_container'>
        <div className="giftcards_content">
            <h2 className='giftcards_title'>Bookshop Gift Cards</h2>
            <div className='giftcards_parag'>
                <p>Bookshop digital gift cards are the perfect gift for any avid reader. 
                    The card value is added to the recipient's Bookshop account as credit, 
                    and never expires. Bookshop digital gift cards can only be redeemed online on Bookshop.org
                </p>
            </div>
            <div className="giftcards_sections">
              <div className="giftcards_img">
                <div className='giftcards_logo'>
                  <img src={GiftCardsLogo} alt="" />
                </div>
                <div>
                  <ul>
                    <li>If you purchase a gift card from a specific store or affiliate on Bookshop, 
                      the recipient will be sent to the same store on our site when they click the 
                      link to redeem the card, so the store will get credit for any purchases made. 
                      However, it is possible for a customer to change to a different shop affiliation 
                      if they want to spread their purchases around--the card is like cash, and can be 
                      spent how the recipient wants.</li>
                      <li>Bookshop Gift Cards are only accepted at <br /> <a href="https://bookshop.org/">bookshop.org/</a> 
                      </li>
                      <li>You can choose a value from $10-$1,000.</li>
                      <li>All gift cards are digital only and must be sent to a valid email address.</li>
                      <li>For a personalized touch, include the recipient's name and a personal message on the gift card form. 
                        This will appear in the email they receive with the redemption code and link.</li>
                      <li>If you want the card delivered on a specific day, for example the recipient's birthday,
                         enter the date in our order form and we'll send it to them in the morning of that day.</li>
                      <li>Bookshop Gift Cards never expire and have no hidden fees. <br />
                          <a href="">View the Terms of Service</a> <br /> 
                          To purchase multiple gift cards please add them one at a time to your cart.</li>
                  </ul>
                </div>
              </div>
              <div className="giftcards_form">
                <form action="">
                  <div className='form-emails'>
                    <div className="form-group">
                      <label>To *</label>
                      <input type="email" name='email' placeholder='recipients email' required/>
                    </div>
                    <div className="form-group">
                      <label>From *</label>
                      <input type="email" name='email' placeholder='your email' required/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Choose An Amount</label>
                    <div className='giftcards-amount'>
                      <div><input type="checkbox" name='amount' value={amount}/><label>DT10</label></div>
                      <div><input type="checkbox" name='amount' value={amount}/><label>DT15</label></div>
                      <div><input type="checkbox" name='amount' value={amount}/><label>DT25</label></div>
                      <div><input type="checkbox" name='amount' value={amount}/><label>DT50</label></div>
                      <div><input type="checkbox" name='amount' value={amount}/><label>DT100</label></div>
                      <div><input type="checkbox" name='amount' value={amount}/><label>DT250</label></div>
                      <div><input type="checkbox" name='amount' value={amount}/><label>DT500</label></div>
                      <div><input type="checkbox" name='amount' value={amount}/><label>DT1000</label></div>
                    </div>
                  </div>
                  <div className="form-group giftcards-message">
                    <label>Add A Message</label>
                    <textarea type="textarea" name='message' placeholder='0/250' required/>
                  </div>
                  <div className="form-group">
                    <label>Send Date</label>
                    <input type="date" name='date' placeholder='jj/mm/yyyy' required/>
                  </div>
                  <button className='btn-giftcards'>ADD TO CART</button>
                </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default GiftCards