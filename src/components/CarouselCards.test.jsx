import { render, screen, fireEvent } from '@testing-library/react'
import CarouselCards from './CarouselCards'

// Mock de los iconos de Heroicons
jest.mock('@heroicons/react/24/outline', () => ({
  ChevronLeftIcon: () => <div data-testid="chevron-left">‹</div>,
  ChevronRightIcon: () => <div data-testid="chevron-right">›</div>,
  CalendarIcon: () => <div data-testid="calendar">📅</div>,
  MapPinIcon: () => <div data-testid="map-pin">📍</div>,
}))

describe('CarouselCards', () => {
  test('renderiza el título de la sección', () => {
    render(<CarouselCards />)
    expect(screen.getByText('Eventos Próximos')).toBeInTheDocument()
  })

  test('renderiza la descripción', () => {
    render(<CarouselCards />)
    expect(screen.getByText(/Descubre los eventos más destacados/)).toBeInTheDocument()
  })

  test('renderiza los botones de navegación', () => {
    render(<CarouselCards />)
    expect(screen.getByLabelText('Anterior')).toBeInTheDocument()
    expect(screen.getByLabelText('Siguiente')).toBeInTheDocument()
  })

  test('renderiza las tarjetas de eventos', () => {
    render(<CarouselCards />)
    // Verifica que se rendericen los títulos de los eventos
    expect(screen.getByText('Torneo Nacional de Clubes Nivel A y B')).toBeInTheDocument()
    expect(screen.getByText('Comunica y toma acción')).toBeInTheDocument()
    expect(screen.getByText('Malbec de Selva')).toBeInTheDocument()
  })

  test('renderiza los badges de categorías', () => {
    render(<CarouselCards />)
    expect(screen.getByText('Deportes')).toBeInTheDocument()
    expect(screen.getByText('Conferencia')).toBeInTheDocument()
    expect(screen.getByText('Gastronomía')).toBeInTheDocument()
  })

  test('renderiza los badges de destacado', () => {
    render(<CarouselCards />)
    expect(screen.getByText('Destacado')).toBeInTheDocument()
  })

  test('renderiza los botones "Ver Detalles"', () => {
    render(<CarouselCards />)
    const verDetallesButtons = screen.getAllByText('Ver Detalles')
    expect(verDetallesButtons.length).toBeGreaterThan(0)
  })

  test('renderiza los indicadores de puntos', () => {
    render(<CarouselCards />)
    // Verifica que se rendericen los puntos indicadores
    const dots = screen.getAllByRole('button').filter(button => 
      button.getAttribute('aria-label')?.includes('Ir al evento')
    )
    expect(dots.length).toBeGreaterThan(0)
  })

  test('formatea las fechas correctamente', () => {
    render(<CarouselCards />)
    // Verifica que las fechas se muestren en formato español
    expect(screen.getByText(/jul 2025/)).toBeInTheDocument()
  })

  test('muestra los iconos de calendario y ubicación', () => {
    render(<CarouselCards />)
    expect(screen.getAllByTestId('calendar').length).toBeGreaterThan(0)
    expect(screen.getAllByTestId('map-pin').length).toBeGreaterThan(0)
  })
})
