import Complex from '../../complex';
import { isInfinite, isNaNC, isZero } from '../../operations';

/**
 * Calculates the hyperbolic sine of a Complex number.
 */
export default function sinh(z: Complex): Complex {
  if (isInfinite(z) || isNaNC(z)) return Complex.NAN;
  if (isZero(z)) return Complex.ZERO;

  const a: number = z.getRe();
  const b: number = z.getIm();

  return new Complex(Math.sinh(a) * Math.cos(b), Math.cosh(a) * Math.sin(b));
}
