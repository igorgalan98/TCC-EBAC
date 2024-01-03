describe('Cupons', () => {

    it('Deve listar todos os cupons cadastrados', () => {

        cy.request({
            method: 'GET',
            url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons',
            headers: {
                authorization: 'Bearer YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
            },
        })
        .then((response) =>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
        })
        })
    });
