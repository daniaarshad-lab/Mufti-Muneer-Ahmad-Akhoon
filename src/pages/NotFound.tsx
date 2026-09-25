import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass, BookOpen, Search, Home as HomeIcon } from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Heading } from '../components/Heading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';

export const NotFound: React.FC = () => {
  return (
    <div>
      <SEO
        title="Page Not Found (404)"
        description="The requested page could not be located on the official portal of Mufti Muneer Ahmad Akhoon."
      />

      <Section variant="light" spacing="relaxed">
        <Container size="narrow">
          <Card className="p-8 sm:p-12 text-center space-y-6 max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#FAF8F3] border border-[#E5E1D8] flex items-center justify-center mx-auto text-[#8C6B38]">
              <Compass className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#8C6B38] font-mono font-medium block mb-1">
                HTTP 404 Error
              </span>
              <h1 className="font-serif text-3xl text-[#0F2E2C] font-medium tracking-tight">
                Page Not Found
              </h1>
            </div>

            <p className="text-sm text-[#6B6B65] leading-relaxed">
              The page you are looking for may have been moved, renamed, or is currently undergoing archival cataloging.
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Button to="/" variant="primary" size="md">
                <HomeIcon className="w-4 h-4 mr-1.5" />
                <span>Return to Homepage</span>
              </Button>
              <Button to="/about" variant="outline" size="md">
                <span>About Hazrat Ji</span>
              </Button>
            </div>

            <div className="pt-6 border-t border-[#E5E1D8] text-xs text-[#6B6B65] space-y-2">
              <span className="font-medium text-[#0F2E2C] block">Popular Destinations:</span>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/fatwas" className="text-[#8C6B38] hover:underline">
                  Darul Ifta
                </Link>
                <span>•</span>
                <Link to="/khanqah" className="text-[#8C6B38] hover:underline">
                  Khanqah Yusufia
                </Link>
                <span>•</span>
                <Link to="/media/videos" className="text-[#8C6B38] hover:underline">
                  RahamTV Videos
                </Link>
                <span>•</span>
                <Link to="/books" className="text-[#8C6B38] hover:underline">
                  Publications
                </Link>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </div>
  );
};
