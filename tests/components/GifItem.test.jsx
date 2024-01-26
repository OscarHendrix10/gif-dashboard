import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";

describe('pruesbas en gifitema', () => { 

    const title = "saitama";
    const url = "https://localhost/algo.jpg";

    test('debe hacer match con el snapshot', () => {
        
        

        const { container } = render( <GifItem title={ title } url={ url } /> );

        expect(container).toMatchSnapshot();

    });


    test('debe de mostrar la imagen con el URL y el alt Indicado', () => {
            
            
            render( <GifItem title={ title } url={ url } /> );
            // screen.debug();

            // expect(screen.getByRole('img').src).toBe(url);

            const {src, alt} = screen.getByRole('img');
            expect(src).toBe(url);
            expect(alt).toBe(alt);
        });

    test('debe de mostrar el texto', () => {

        render( <GifItem title={ title } url={ url } /> );

        expect(screen.getByText(title)).toBeTruthy();


    });


    });