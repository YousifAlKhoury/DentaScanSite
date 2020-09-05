import React from 'react'
import { Link } from 'gatsby'
import SEO from "../components/seo"
import Layout from "../components/layout"
import contactStyles from '../components/contact.module.scss'


const ContactPage = () => {

    return (
        <Layout>
            <SEO title = "Contact us" />
            <h1>Contact Form:</h1>
            <form action="https://getform.io/f/d2a8c0f1-f491-4b24-a5fe-78f766d5ed02" method="POST">
                <label>
                    <p><span className = {contactStyles.label}>Name</span>
                    <input type="text" name="name" id="name" /></p>
                </label>
                <label>
                    <p><span className = {contactStyles.label}>Email</span>
                    <input type="email" name="email" id="email" /></p>
                </label>
                <label>
                    <p><span className = {contactStyles.label}>Subject</span>
                    <input type="text" name="subject" id="subject" /></p>
                </label>
                <label>
                    <p><span className = {contactStyles.label}>Message</span>
                    <textarea name="message" id="message" rows="5" /></p>
                </label>
                <button type="submit">Send</button>
                <input type="reset" value="Clear" />
            </form>
        </Layout>

    )
}

export default ContactPage