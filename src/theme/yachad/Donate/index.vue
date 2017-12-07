<template>
  <article>
    <header class="article-header">
			<h1 class="text-center">Donate to Yachad</h1>
		</header>
    <main class="container">
			<div class="article-content">
        <div class="validation_error">
            <strong>Please Correct the Following Errors:</strong><br />
        </div>
        <form class="donation-form" action="" method="post">
					<section class="form-section">
						<h3>Donation Amount</h3>

						<label class="label--radio"><input type="radio" name="amount" value="18000"> <strong>$18,000</strong>  Give a child a school year of special Jewish education at Yachad's IVDU School</label>

						<label class="label--radio"><input type="radio" name="amount" value="10000"> <strong>$10,000</strong>  Send a child to an <i>inclusive</i> Israel summer experience</label>

						<label class="label--radio"><input type="radio" name="amount" value="5000"> <strong>$5,000</strong>  Send a child to an <i>inclusive</i> summer camp program</label>

						<label class="label--radio"><input type="radio" name="amount" value="2500"> <strong>$2,500</strong>  Sponsor a young adult for a month of vocational training</label>

						<label class="label--radio"><input type="radio" name="amount" value="1800"> <strong>$1,800</strong>  Sponsor a local social skills training program</label>

						<label class="label--radio"><input type="radio" name="amount" value="1000"> <strong>$1,000</strong>  Sponsor a local parent or sibling support group</label>

						<label class="label--radio"><input type="radio" name="amount" value="500"> <strong>$500</strong>  Sponsor a participant to attend a unique Family Shabbaton retreat</label>

						<label class="label--radio"><input type="radio" name="amount" value="360"> <strong>$360</strong>  Sponsor a participant to attend a National Leadership Shabbaton</label>

						<label class="label--radio"><input type="radio" name="amount" value="180"> <strong>$180</strong>  Sponsor an individual's year-long membership to Yachad</label>

						<label class="label--radio"><input type="radio" name="amount" value="100"> <strong>$100</strong>  Enable an individual to attend an <i>inclusive</i> Shabbaton</label>

						<label class="label--radio"><input type="radio" name="amount" value="72"> <strong>$72</strong>  Enable an <i>Our Way</i> family to participate in a Shabbaton for the hearing impaired</label>

						<label class="label--radio"><input type="radio" name="amount" value="50"> <strong>$50</strong>  Enable an individual to attend an <i>inclusive</i> Jewish holiday event</label>

						<label class="label--radio"><input type="radio" name="amount" value="36"> <strong>$36</strong> Sponsor a child to attend an <i>inclusive</i> Sunday social recreational program</label>

						<label class="label--radio"><input type="radio" name="amount" value="Other"> Other</label>

						<div class="form-row otherAmount" style="display: none;" :class="{ open: isOther}">
							<div class="section">
								<div class="col span_1_of_2">
									<input type="text" name="otherAmount" placeholder="Enter Amount" value=""/>
								</div>
							</div>
						</div>

					</section>

					<section class="form-section">
						<h3>Donation Frequency</h3>
						<div class="form-row">
							<label>How often do you want to make this donation?</label>
							<label class="label--radio"><input type="radio" name="recurring" value="One time donation" /> One time donation</label>
							<label class="label--radio"><input type="radio" name="recurring" value="Monthly" /> Monthly</label>
						</div>

						<div class="form-row recurring_months" style="display: none;">
							<div class="section">
								<div class="col span_1_of_2">
									<label>How many months</label>
              		<select class="form-control" name="recurring_months">
	                  <option value="">Select Months</option>
	                  <option value="1">1 Month</option>
	                  <option value="2">2 Months</option>
	                  <option value="3">3 Months</option>
	                  <option value="4">4 Months</option>
	                  <option value="5">5 Months</option>
	                  <option value="6">6 Months</option>
	                  <option value="7">7 Months</option>
	                  <option value="8">8 Months</option>
	                  <option value="9">9 Months</option>
	                  <option value="10">10 Months</option>
	                  <option value="11">11 Months</option>
	                  <option value="12">12 Months</option>
	                  <option value="Indefinite">Indefinite</option>
              		</select>
								</div>
							</div>
						</div>

						<div class="form-row">
							<label>Which fund do you want to give to?</label>
							<label class="label--radio"><input type="radio" name="designation" value="General Donation"> General Donation</label>

							<label class="label--radio"><input type="radio" name="designation" value="End of Year Campaign"> End of Year Campaign</label>
						</div>
					</section>

					<section class="form-section">
						<h3>Personal Info</h3>
						<div class="form-row">
							<div class="section">
								<div class="col span_1_of_2">
									<label for="first_name">First Name <span class="ast">*</span></label>
									<input id="first_name" type="text" name="name[firstName]" required="required" value=""/>
								</div>
								<div class="col span_1_of_2">
									<label for="last_name">Last Name  <span class="ast">*</span></label>
									<input id="last_name" type="text" name="name[lastName]" required="required" value=""/>
								</div>
							</div>
						</div>
						<div class="form-row">
							<div class="section">
								<div class="col span_1_of_2">
									<label for="country">Country <span class="ast">*</span></label>
									<select name="Card[Address][Country]" class="select-country" id="country">
											<option value="">Select Country</option>
									</select>
								</div>
							</div>
						</div>
						<div class="form-row">
							<label for="address">Address <span class="ast"></span></label>
							<input id="address" type="text" name="Card[Address][Street]" required="required" value=""/>
						</div>
						<div class="form-row">
							<div class="section">
								<div class="col span_1_of_2">
									<label for="city">City <span class="ast">*</span></label>
									<input id="city" type="text" name="Card[Address][City]" required="required" value=""/>
								</div>
								<div class="col span_1_of_4">
									<label for="state">State <span class="ast">*</span></label>
									<select name="Card[Address][State]" class="select-state" id="state" required>
											<option value="">Select State</option>
									</select>
								</div>
								<div class="col span_1_of_4">
									<label for="zip">Zip <span class="ast">*</span></label>
									<input id="zip" type="text" name="Card[Address][Zip]" required="required" value=""/>
								</div>
							</div>
						</div>
						<br/>
						<div class="form-row">
							<div class="section">
								<div class="col span_1_of_2">
									<label for="phone">Phone <span class="ast">*</span></label>
									<input type="text" name="Card[Address][Phone]" required="required" id="phone" value=""/>
								</div>
							</div>
						</div>
						<div class="form-row">
							<div class="section">
								<div class="col span_1_of_2">
									<label for="email">Email <span class="ast">*</span></label>
									<input type="text" name="email" required="required" id="email" value="" />
								</div>
							</div>
						</div>
						<div class="form-row">
							<label class="label--radio"><input type="checkbox" name="newsletter_signup" checked="checked"> Please send me email updates from Yachad and the Orthodox Union</label>
						</div>

						<div class="well card-holder" style="display: none;">
							<div class="form-row">
								<label class="label--radio"><input type="checkbox" name="sendCard">Would you like Yachad to send an acknowledgment card on your behalf?</label>

								<label class="label--radio"><input type="checkbox" name="sendEmail">Would you like Yachad to send an acknowledgment email on your behalf?</label>
							</div>
						</div>
					</section>

					<div class="card-inner" style="display: none;">
						<section class="form-section">
							<h3>Card Dedication</h3>
							<div class="form-row">
								<label for="dedicated">Card Dedication</label>
								<label class="label--radio"><input class="card-input" type="radio" name="cardDedication" value="In Memory Of" /> In Memory Of</label>

								<label class="label--radio"><input class="card-input" type="radio" name="cardDedication" value="In Honor Of" /> In Honor Of</label>
							</div>

							<div class="form-row">
									<label for="message">Card Dedication Message</label>
									<textarea class="card-input" rows="3" name="cardMessage"></textarea>
							</div>

							<div class="form-row">
									<label for="message">How would you like to sign off the card?</label>
									<input class="card-input" type="text" name="cardSignOff" value="" />
							</div>
						</section>
						<section class="form-section">
							<h3>Card Recipient</h3>
							<div class="form-row">
								<div class="section">
									<div class="col span_1_of_2">
										<label for="cardFirstName">Recipient First Name</label>
										<input class="card-input" type="text" name="cardFirstName" id="cardFirstName" value=""/>
									</div>
									<div class="col span_1_of_2">
										<label for="cardLastName">Recipient Last Name</label>
										<input class="card-input" type="text" name="cardLastName" id="cardLastName" value=""/>
									</div>
								</div>
							</div>
							<div class="form-row">
								<label for="cardStreet">Recipient Address</label>
								<input class="card-input" type="text" name="cardStreet" id="cardStreet" value=""/>
							</div>
							<div class="form-row">
								<div class="section">
									<div class="col span_1_of_4">
										<label for="cardCountry">Country</label>
										<select name="cardCountry">
												<option value="">Select Country</option>
										</select>
									</div>
									<div class="col span_1_of_4">
										<label for="cardCity">City</label>
										<input class="card-input" type="text" name="cardCity" placeholder="City" value=""/>
									</div>
									<div class="col span_1_of_4">
										<label for="cardState">State</label>
										<select name="cardState">
												<option value="">Select State</option>
										</select>
									</div>
									<div class="col span_1_of_4">
										<label for="cardZip">Zip</label>
										<input class="card-input" type="text" name="cardZip" placeholder="Zip" value=""/>
									</div>
								</div>
							</div>
						</section>

					</div>
					<div class="email-inner" style="display: none;">

						<section class="form-section">
							<h3>Email Dedication</h3>

							<div class="form-row">
								<div class="section">
									<div class="col span_1_of_2">
										<label for="emailFirstName">Recipient First Name</label>
										<input class="email-input" type="text" name="emailFirstName" id="emailFirstName" value=""/>
									</div>
									<div class="col span_1_of_2">
										<label for="emailLastName">Recipient Last Name</label>
										<input class="email-input" type="text" name="emailLastName" id="emailLastName" value=""/>
									</div>
								</div>
							</div>
							<div class="form-row">
								<div class="section">
									<div class="col span_1_of_2">
										<label for="emailEmail">Recipient Email</label>
										<input class="form-control email-input" type="text" name="emailEmail" id="emailEmail" value=""/>
									</div>
								</div>
							</div>
							<div class="form-row">
								<label for="dedicated">Dedication</label>
								<label class="label--radio"><input type="radio" name="dedicated" value="In Memory Of" /> In Memory Of</label>
								<label class="label--radio"><input type="radio" name="dedicated" value="In Honor Of" /> In Honor Of</label>
								<label class="label--radio"><input type="radio" name="dedicated" value="For the Recovery Of" /> For the Recovery Of</label>
							</div>
							<div class="form-row">
								<label for="message">Email Dedication Message</label>
								<textarea rows="3" name="message"></textarea>
							</div>
						</section>
					</div>

					<section class="form-section">
						<h3>Payment Details</h3>
						<div class="form-row">
							<label class="label--radio"><input name="canadian-tax-receipt" value="1" type="checkbox"> I would like a Canadian tax receipt</label>
						</div>
						<div class="form-row">
							<div class="section">
								<div class="col span_1_of_2">
									<label for="card-name">Cardholder Name <span class="ast">*</span></label>
									<input id="card-name" type="text" name="Card[NameOnAccount]" required="required" value="" />
								</div>
							</div>
						</div>
						<div class="form-row">
							<div class="section">
								<div class="col span_1_of_2">
									<label for="card-num">Credit Card Number <span class="ast">*</span></label>
									<input id="card-num" type="text" name="Card[CardNumber]" required="required" value="" />
								</div>
								<div class="col span_1_of_2">
									<img src="card img" />
								</div>
							</div>
						</div>
						<div class="form-row">
							<div class="section">
								<div class="col span_1_of_4">
									<label for="card-exp-month">Exp. Month <span class="ast">*</span></label>
									<select id="card-exp-month" name="Card[ExpirationMonth]" required="required">
										<option></option>
                    <option>1</option>
                    <option>2</option>
									</select>
								</div>
								<div class="col span_1_of_4">
									<label for="card-exp-year">Exp. Year <span class="ast">*</span></label>
									<select name="Card[ExpirationYear]" id="card-exp-year" required="required">
                    <option></option>
									</select>
								</div>
								<div class="col span_1_of_4">
									<label for="cvv">CVV <span class="ast">*</span></label>
									<input id="cvv" type="text" name="Card[SecurityCode]" required="required"/>
								</div>
							</div>
						</div>
					</section>
					<div class="form-row">
						<input type="submit" name="submit" class="btn" value="Donate" />
					</div>
				</form>
			</div>
		</main>
    <Subscribe></Subscribe>
    <Events></Events>
  </article>
</template>

<script>
import Subscribe from 'src/Shared/Subscribe/index'
import Events from 'src/Shared/Events/index'

export default {
  name: 'Doante',
  components: {
    Subscribe,
    Events
  },
  data: function () {
    return {
      isOther: false
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 940px) {
  .donation-form {
    padding:80px;
    box-shadow: 0 0 15px #efefef;
  }
}

[type="submit"] {
  box-shadow: 0 0 15px #ccc;
}

[type="submit"]:hover {
  box-shadow: 0 0 8px #666;
}
.open {
  display: block !important;
}
</style>
