
import React, { useRef } from "react";
import "../stylesheet/contact.css";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_87ye25b",
      "template_zi7a95i",
      form.current,
      "ybfZfXGgsniyjPPxo"
    )
      .then(
        () => {
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="full-height" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-us">Get In <span>Touch</span></h1>
          <p className="subtitle">
            Let's build something amazing together. Reach out for collaborations!
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Form Side */}
          <div className="contact-form-side">
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-row">
                <input type="text" name="user_name" placeholder="Name" required />
                <input type="email" name="user_email" placeholder="Email" required />
              </div>
              <input type="text" name="user_phone" placeholder="Phone (Optional)" className="full-input" />
              <textarea name="message" placeholder="Project details..." required></textarea>
              <button type="submit" className="submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="contact-info-side">
            <div className="info-grid">
              <div className="info-item">
                <div className="info-icon"><MapPin size={20} /></div>
                <div className="info-content">
                  <h4>Location</h4>
                  <p>New Delhi, India</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <div className="info-content">
                  <p> <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=kunal070925@gmail.com&su=Contact%20From%20Website&body=Hello%20Kunal"
                    target="_blank"
                    rel="noreferrer"><h4>Email</h4>
                    kunal070925@gmail.com
                  </a> </p>
                </div>
              </div>


              <div className="info-item">
                <div className="info-icon"><Phone size={20} /></div>
                <div className="info-content">
                  <h4>Phone</h4>
                  <p>+91 9315837542</p>
                </div>
              </div>
            </div>

            <div className="map-container">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.0688975472!3d28.52721314399371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b71532ad4f4!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;