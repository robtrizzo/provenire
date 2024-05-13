import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { TypographyP } from '@/components/ui/typography';

export default function Donum({
  children,
  tooltip,
}: {
  children: React.ReactNode;
  tooltip?: string;
}) {
  if (tooltip) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <em>
              <span
                style={{
                  textShadow: '#FC0 1px 0 10px',
                }}
                className="has-tooltip"
              >
                {children}
              </span>
            </em>
          </TooltipTrigger>
          <TooltipContent>
            <TypographyP className="text-red-500 ">{tooltip}</TypographyP>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  } else {
    return (
      <em>
        <span
          style={{
            textShadow: '#FC0 1px 0 10px',
          }}
          className="has-tooltip"
        >
          {children}
        </span>
      </em>
    );
  }
}
