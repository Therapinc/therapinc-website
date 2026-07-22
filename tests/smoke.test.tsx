import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '@/app/page';

describe('Smoke Test - Therapinc Website Landing Page', () => {
  it('renders the main heading and hero component', () => {
    render(<Home />);

    // Check that brand name or main hero elements render properly
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
  });
});
