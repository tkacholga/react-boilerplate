import React from 'react';

// translation
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import messages from 'containers/HomePage/messages';

const FooterAddress = () => (
  <>
    <footer className="w-full text-gray-700 bg-dark body-font">
      <div className="container mx-auto ">
        <div className="flex flex-wrap text-center md:text-left">
          <div className="w-full">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full md:w-1/2 lg:w-3/12 px-4 py-4 ml-auto">
                <h4 className="block uppercase text-white text-sm font-semibold mt-4 mb-2">
                  Toronto Office
                </h4>

                <p className="text-white mt-4 mb-2">
                  1140 - 121 King Street West
                </p>

                <p className="text-white mt-4 mb-2">Toronto, Ontario</p>

                <p className="text-white mt-4 mb-2">M5H 3T9</p>

                <p className="text-white mt-4 mb-2">(416) 644-2020</p>
              </div>

              <div className="w-full md:w-1/2 lg:w-3/12 px-4 py-4 ml-auto">
                <h4 className="block uppercase text-white text-sm font-semibold mt-4 mb-2">
                  Montreal Office
                </h4>

                <p className="text-white mt-4 mb-2">
                  1050 - 3400, boul. De Maisonneuve O.
                </p>

                <p className="text-white mt-4 mb-2">Montreal, Quebec</p>

                <p className="text-white mt-4 mb-2">H3Z 3B8</p>

                <p className="text-white mt-4 mb-2">(514) 939-3989</p>
              </div>

              <div className="w-full md:w-1/2 lg:w-3/12 px-4 py-4  ml-auto">
                <h4 className="block uppercase text-white text-sm font-semibold mt-4 mb-2">
                  New York Office
                </h4>

                <p className="text-white mt-4 mb-2">
                  26 - 405 Lexington Avenue
                </p>

                <p className="text-white mt-4 mb-2">New York, New York</p>

                <p className="text-white mt-4 mb-2">10174</p>

                <p className="text-white mt-4 mb-2">(212) 812-7680</p>
              </div>

              <div className="w-full md:w-1/2 lg:w-3/12 px-4 py-4 ml-auto">
                <h4 className="block uppercase text-white text-sm font-semibold mt-4 mb-2">
                  Atlanta Office
                </h4>

                <p className="text-white mt-4 mb-2">
                  1140 - 121 King Street West
                </p>

                <p className="text-white mt-4 mb-2">Toronto, Ontario</p>

                <p className="text-white mt-4 mb-2">M5H 3T9</p>

                <p className="text-white mt-4 mb-2">(416) 644-2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default FooterAddress;
