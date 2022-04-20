import React, {useState, useEffect, useRef} from 'react'
import ButtonQuote from './ButtonQuote'
import {getQuotes} from '../api/quoteApi'
import {Button, Box, Container} from  '@mui/material' 

const QuoteBox = () => {
    const quotes = getQuotes()
    const randomNumber = () => Math.floor(Math.random() * ((quotes.length) - 0))
    // Math.round(Math.random() * ((quotes.length + 1) - 0))
    const [quote, setQuote] = useState(quotes[randomNumber()])
    const quoteRef = useRef(quote)
    useEffect(()=> {
        quoteRef.current = quote
    }, [quote])

    return (
        <Container
            sx={{
              
                backgroundColor: 'primary.main'
            }}
        >
            <Box
                sx={{
                    width: 600,
                    height: 300,
                    backgroundColor: 'primary.dark'
                }}
            >
                <p>
                    {quoteRef.current.quoteMes}
                </p>
                <p>
                    {quoteRef.current.author}
                </p>
            </Box>
            <div>
                <ButtonQuote
                    link="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DSir%2BClaus%2BMoser%26content%3DEducation%2Bcosts%2Bmoney.%2B%2BBut%2Bthen%2Bso%2Bdoes%2Bignorance.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"
                    icon={"tumblr"}
                />
                <ButtonQuote
                    link="https://twitter.com/intent/tweet"
                    icon={"twitter"}
                />
                <Button  variant='contained' id='new-quote' onClick={() => setQuote(quotes[randomNumber()])}>New Quote</Button>
            </div>
        </Container>
    )
}

export default QuoteBox

{/* 

        <div>
            <p>
                {quoteRef.current.quoteMes}
            </p>
            <p>
                {quoteRef.current.author}
            </p>
            <div>
                <ButtonQuote
                    link="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DSir%2BClaus%2BMoser%26content%3DEducation%2Bcosts%2Bmoney.%2B%2BBut%2Bthen%2Bso%2Bdoes%2Bignorance.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"
                    icon={"tumblr"}
                />
                <ButtonQuote
                    link="https://twitter.com/intent/tweet"
                    icon={"twitter"}
                />
                <Button  variant='contained' id='new-quote' onClick={() => setQuote(quotes[randomNumber()])}>New Quote</Button>
            </div>
        </div> */}