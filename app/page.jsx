import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { BankHoliday, BankInfoImage1, RoutingNumberAnalysisForBetterUnderstanding, SwiftCode } from '@/assets/images'
import Link from 'next/link'
import { DOMAIN } from '@/constant/variable'
import { HeadingThree, HeadingTwo } from '@/components/headings'
import ResponsiveImage from '@/components/images/ResponsiveImage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="container px-4 lg-px-0">
      {/* Article 1 */}
      <article className="d-lg-flex align-content-center bi-section-space">
          <figure className='d-flex justify-content-center'>
            <Image 
              src={BankInfoImage1.img}
              alt={BankInfoImage1.alt}
              title={BankInfoImage1.title}
              height={300}
              width={300}  
              className="bi-content-padding"       
            />
          </figure>

          <div className="p-lg-3">
            <HeadingTwo>Welcome to Banks Info</HeadingTwo>
            <p>
              <span className='bi-paragraph'> 
              <Link href={`${DOMAIN}`}>Banks Info</Link> is the best 
              <Link href={`${DOMAIN}/blog/`} >website</Link> to Lookup your 
              <Link href={`${DOMAIN}/blog/bank-info/`}> bank information</Link> including 
              <Link href={`${DOMAIN}/routing-number-lookup/`}> Routing Number</Link>, 
              <Link href={`${DOMAIN}/swift-code-lookup/`}> SWIFT code</Link> or BIC Code, Branch Code, Bank location/Address, 
              <Link href={`${DOMAIN}/holiday/`}> Bank Holiday</Link>, 
              <Link href={`${DOMAIN}/blog/reviews/`}> USA Bank Reviews</Link>, 
              <Link href={`${DOMAIN}/blog/insurance/`}> insurance</Link> and 
              <Link href={`${DOMAIN}/blog/business-news/`}> Business News</Link> of all USA Bank. Because we have tried to collect the correct information and write in details on that following topic.
              </span>
            </p>
          </div>
      </article>
      {/* Article 2 */}
      <article className='bi-section-space'>
        <div className="row">
          <div className="col-lg-6 bi-content-padding">
            <HeadingTwo>Bank Routing Number Information</HeadingTwo>
            <p>
              <span>
                A routing number is a nine-digit code which is used to identify a bank institution where your 
                <Link href="https://banksinfo.us/definition/bank-account-number/"> bank account </Link> 
                was opened. It is also known as an RTN, an ABA routing number, or a routing transit number. Banks use routing numbers to direct the exchange of funds to and from one another. It is used to send money internationally. 
                <Link href="https://banksinfo.us/routing-number/"> Learn more about Routing Number </Link>
                <br/>
              </span>
            </p>
          </div>
          <div className="col-lg-6 position-relative">
            <ResponsiveImage imgObj={RoutingNumberAnalysisForBetterUnderstanding}/>
          </div>
        </div>
      </article>

      {/* Article 3 */}
      <article className='bi-section-space'>
        <div className="row">
          <div className="col-lg-6 position-relative">
            <ResponsiveImage imgObj={SwiftCode} />
          </div>
          <div className="col-lg-6 bi-content-padding">
            <HeadingTwo>Banks Swift Code Information</HeadingTwo>
            <p>
              <span>
                A SWIFT code is an international bank code that identifies particular banks worldwide. It’s also known as a Bank Identifier Code (BIC). Bank uses SWIFT codes to send money to overseas banks. 

                A SWIFT code consists of 8 or 11 characters. 
                <em> Learn more about </em> – 
                <a href="https://banksinfo.us/swift-code/what-is-swift-code/"> SWIFT Code</a> and <a href="https://banksinfo.us/swift-code/use-of-swift-code-of-a-bank/"> USE of SWIFT Code </a>.
              </span>
             
            </p>
            <div className="">
              <HeadingTwo>BIC Code Info of all Bank</HeadingTwo>
              <p>
                <span>The elaboration form of <strong>BIC Code</strong> is <strong>Bank Identifier Code</strong>. BIC Code is the SWIFT Address assigned to a bank in order to send automated payments quickly and accurately to the banks concerned. For this, BIC Code is also known as <a href="https://banksinfo.us/swift-code/analysis-of-swift-code/">SWIFT Code</a>. It uniquely identifies the Bank’s name or financial Institution’s name, country, (and sometimes the branch) and head office location of the bank. <a href="https://banksinfo.us/definition/what-is-bic-code-of-a-bank/">BIC Code</a> can be either 8 or 11 characters code.</span>              
              </p>
              <Link href="">
                <span style={{fontSize: '14pt'}}>
                  <strong>
                  BIC / SWIFT Code Lookup Here
                  </strong>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Article 4 */}
      <article>
        <div className="row">
          <div className="col-lg-6">
            <HeadingTwo>Bank Holidays Information</HeadingTwo>
            <p>
              Here you will get <a href="https://banksinfo.us/holiday/">National Holidays, Bank Holidays and Business Holidays Information</a>. The following is the Standard Bank Holidays of USA Schedule Which is provided by the Federal Reserve Bank System. Here you will get the Region of Holiday and Date of Holiday. Please click on the “Region of Bank Holiday” to know the details about the holiday as – Region of the holiday, event and incident, Importance of the day etc.
            </p>
            <div className="">
            <HeadingThree>Here are some Popular Bank holiday Schedule.</HeadingThree>
            <table class="table table-bordered">
            <tbody>
              <tr>
                <td className='p-3'><Link href="https://banksinfo.us/blog/holidays/national-holidays-in-usa/">National Holidays, USA</Link></td>
                <td className='p-3'><Link href="https://banksinfo.us/blog/bank-holidays/us-bank-holidays/">US Bank Holidays</Link></td>
              </tr>
              <tr>
                <td className='p-3'><Link href="https://banksinfo.us/holiday/national/national-holiday-calendar-2020/">National Holiday Calendar</Link></td>
                <td className='p-3'><Link href="https://banksinfo.us/blog/bank-holidays/federal-reserve-system-holidays/">Federal bank holidays</Link></td>
              </tr>
              <tr>
                <td className='p-3'><Link href="https://banksinfo.us/blog/bank-holidays/bank-of-america-holidays/">Bank Of America Holidays</Link></td>
                <td className='p-3'><Link href="https://banksinfo.us/blog/bank-holidays/chase-bank-holidays/">Chase Bank Holidays</Link></td>
              </tr>
              <tr>
                <td className='p-3'><Link href="https://banksinfo.us/blog/bank-holidays/wells-fargo-holidays/">Wells Fargo Holidays</Link></td>
                <td className='p-3'><Link href="https://banksinfo.us/blog/category/bank-holidays/">All othre USA Bank Holiday</Link></td>
              </tr>
              </tbody>
            </table>
            </div>
          </div>
          <div className="col-lg-6">
            <ResponsiveImage imgObj={BankHoliday}/>
          </div>

        </div>
      </article>
    </main>
  )
}
