import Services from "@/components/Services"
import { render, screen } from '@testing-library/react';

describe('Home', () => {
    it('should have a guthema text', () => {
        render(<Services/>)     //ARRANGE
    
        const myElem = screen.getByText(/guthema/i);   //ACT
    
        expect(myElem).toBeInTheDocument()   //ASSERT
    });

    // it('should contain the text "adipisicing"', () => {
    //     render(<Services/>)     //ARRANGE
    
    //     const myElem = screen.findAllByText(/adipisicing/i);   //ACT
    
    //     expect(myElem).toBeInTheDocument()   //ASSERT
    // });

    it('should have a heading', () => {
        render(<Services/>)     //ARRANGE
    
        const myElem = screen.getByRole('heading', {
            name: 'Residential',
        });   //ACT
    
        expect(myElem).toBeInTheDocument()   //ASSERT
    });
});
