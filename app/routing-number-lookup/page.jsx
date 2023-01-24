import { HeadingTwo } from '@/components/headings'
import { Content } from '@next/font/google'
import React from 'react'

export default function Page() {
  return (
    <div className="container bi-section-space">
        <section>
            <form>
                <label htmlFor="search">
                    <HeadingTwo size={26} bold={false}>Type your Bank’s Name to Routing Number Lookup</HeadingTwo>
                </label>
                <div className="d-flex">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search ..." aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </div>
                <p className='mt-2'>To Routing Number Lookup or to check your desired banks Routing Number, Just type your Banks Name or Routing Number on the Routing Number Checker Box.</p>
            </form>
        </section>

        {/* Article 1 */}
        <article className='bi-section-space2'>
            <HeadingTwo size={24} bold={false}>ABA Routing Number lookup for checking?</HeadingTwo>
            <p>
                We have created this Routing Number Checker named “ABA Routing Number lookup” by regarding your needs, because I have got many request like this from our contact form.
            </p>
            <p>
                There are several ways to ABA Routing Number lookup. you can find your bank ABA Routing Number if you need it. I’m telling you all the ways of ABA Routing Number lookup.
            </p>
            <p>
                <strong>Lookup your routing number on Bank’s Online Account:</strong> Go to your banks onlline account for your ABA Routing Number Lookup. You will find your banks routing number on your online account page. Remember, you must login your banks online account to get your routing number. Different banks put them in different places so there is no single place to suggest looking.
            </p>
        </article>

        {/* Article 2 */}
        <article className='bi-section-space'>
            <HeadingTwo size={26}>Find Routing Number on</HeadingTwo>
            <p>
                <strong>Lookup your routing number on Check:</strong> You can find your <a href="https://banksinfo.us/tips/account-number-on-check/">bank ABA Routing Number at the bottom of your checks</a>, At the bottom of your check, you will get 3 set of number. You will find the set of 9 digit numbers on the left side of your account number at the bottom of your check.
            </p>
            <p>
                <strong>Lookup your routing number Bank official website:</strong> Go to Bank‘s official website for your desired branch‘s bank ABA Routing Number. Because you will get all branch routing number here.
            </p>
            <p>
                <strong>Lookup your routing number Bank official website:</strong> Go to Bank‘s official website for your desired branch‘s bank ABA Routing Number. Because you will get all branch routing number here.
            </p>
            <p>
                <strong>Find you Routing Number on Bank’s official App:</strong> You will get your bank ABA Routing Number on banks official app or android mobile app. So lookup the official app for your Routing Number.
            </p>
        </article>
    </div>
  )
}
