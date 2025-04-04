export const StarIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="star">
      <path
        fill="#f8b84e"
        d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z"
        color="#000"
        overflow="visible"
        transform="matrix(.04574 0 0 .04561 68.85 -40.34)"
      ></path>
    </svg>
  );
};
export const StarBlackIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
      id="star"
    >
      <path
        d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"
      ></path>
    </svg>
  );
};
export const ArrowLeftIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="arrow" fill="#fff">
      <path d="M16.682 19.674c.01-.012.014-.028.024-.04l6.982-7.714c.39-.434.39-1.138 0-1.572-.004-.004-.008-.006-.012-.008a.936.936 0 0 0-.712-.34H8.998a.948.948 0 0 0-.722.352l-.004-.004a1.202 1.202 0 0 0 0 1.572l6.998 7.754a.928.928 0 0 0 1.412 0z"></path>
    </svg>
  );
};

export const OverViewIcon = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stylitics-icon-size-s svelte-nike-oyxdb3">
      <title>eye icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6021 11.5664C21.7891 11.8284 21.7891 12.1714 21.6021 12.4334C20.5391 13.9234 16.7301 18.7504 12.0001 18.7504C7.26911 18.7504 3.46811 13.9224 2.40711 12.4324C2.22111 12.1704 2.22111 11.8294 2.40711 11.5674C3.46811 10.0774 7.26911 5.2504 12.0001 5.2504C16.7301 5.2504 20.5391 10.0764 21.6021 11.5664Z"
        stroke="#000000"
        strokeWidth="1.5"
        className="stylitics-icon-part-scale svelte-nike-oyxdb3"
      ></path>
      <circle cx="12" cy="12" r="4" stroke="#000000" fill="transparent" className="svelte-nike-oyxdb3"></circle>
    </svg>
  );
};

export const youtubeIcon = "https://res.cloudinary.com/dvyi5jxrm/image/upload/v1724582154/tohz5zlbwl04pngyoxzi.webp";

export const FilterIcon = () => {
  return (
    <svg
      aria-hidden="true"
      className="icon-filter-ds"
      focusable="false"
      viewBox="0 0 24 24"
      role="img"
      width="24px"
      height="24px"
      fill="none"
    >
      <path stroke="currentColor" strokeWidth="1.5" d="M21 8.25H10m-5.25 0H3"></path>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        clipRule="evenodd"
      ></path>
      <path stroke="currentColor" strokeWidth="1.5" d="M3 15.75h10.75m5 0H21"></path>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const HeartIcon = ({
  className,
  width = 18,
  height = 18,
}: {
  className?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      role="img"
      fill="none"
      className={className}
    >
      <path
        stroke="#111111"
        strokeWidth="1.5"
        d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
      ></path>
    </svg>
  );
};

export const HeartFullIcon = ({
  className,
  width = 14,
  height = 14,
}: {
  className?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      data-version="__VERSION_HERE__"
      className={`css-1pu58k5 ${className}`}
      viewBox="0 0 24 24"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.6249601,13.9195841 C21.4420597,10.993861 20.9841034,7.83916811 19.4113413,6.31906421 C17.8385792,4.79896031 14.9917823,4.33678078 13.1202917,6.31906421 C12.8304328,6.53319322 12.5518213,6.91480928 12.3339105,7.0791162 C12.1127972,6.91480928 11.8341858,6.53319322 11.5475293,6.31906421 C9.67283627,4.36222185 6.82924207,4.79896031 5.25647967,6.31906421 C3.68371727,7.83916811 3.22255889,10.993861 6.04286087,13.9195841 L12.3339105,20 C12.4336225,20 18.6249601,13.9195841 18.6249601,13.9195841 Z"
        stroke="#111"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

export const EarthIcon = () => {
  return (
    <svg
      aria-hidden="true"
      className="css-npy3on"
      focusable="false"
      viewBox="0 0 24 24"
      role="img"
      width="16px"
      height="16px"
      fill="none"
    >
      <path
        stroke="#707072"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M21.75 12A9.75 9.75 0 0112 21.75M21.75 12A9.75 9.75 0 0012 2.25M21.75 12c0 2.071-4.365 3.75-9.75 3.75S2.25 14.071 2.25 12m19.5 0c0-2.071-4.365-3.75-9.75-3.75S2.25 9.929 2.25 12M12 21.75A9.75 9.75 0 012.25 12M12 21.75c2.9 0 5.25-4.365 5.25-9.75S14.9 2.25 12 2.25m0 19.5c-2.9 0-5.25-4.365-5.25-9.75S9.1 2.25 12 2.25M2.25 12A9.75 9.75 0 0112 2.25"
      ></path>
    </svg>
  );
};
export const MenuIcon = () => {
  return (
    <svg
      aria-hidden="true"
      height="20"
      viewBox="0 0 16 16"
      version="1.1"
      width="20"
      data-view-component="true"
      className="octicon octicon-three-bars Button-visual"
    >
      <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
    </svg>
  );
};
export const CloseIconMobile = () => {
  return (
    <svg fill="#111" viewBox="0 0 24 24" width={26} height={26}>
      <path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm5.2 15.28l-1.92 1.92L12 13.84 8.72 17.2 6.8 15.28 10.16 12 6.8 8.72 8.72 6.8 12 10.08l3.28-3.28 1.92 1.92L13.92 12l3.28 3.28z"></path>
    </svg>
  );
};

export const SendMessageIcon = ({ fill }: { fill: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      enableBackground="new 0 0 50 50"
      viewBox="0 0 50 50"
      id="telegram"
      className="cursor-pointer hover:opacity-75"
      fill={fill}
    >
      <path d="M47.74382 1.01725L1.86641 19.02935c-.8728.3427-.9045 1.5662-.0507 1.9536l10.1422 4.6024c.2747.1248.4833.3604.5737.6482l4.3514 13.8478c.21981.6991 1.0652.9703 1.6505.5293l7.5741-5.7063c.3617-.2725.8564-.2853 1.2318-.0321l12.7029 8.5698c.6337.4274 1.4977.0648 1.6366-.6867l7.49591-40.5578C49.32611 1.37895 48.51871.71305 47.74382 1.01725zM19.94331 27.54945l-1.3686 7.7802-3.53289-11.1398 24.221-15.0333L19.94331 27.54945zM8.11682 29.58125c-.39061-.3906-1.02341-.3906-1.41411 0l-5.603 5.6025c-.3906.3907-.3906 1.0235 0 1.4141.3906.3906 1.0234.3906 1.41411 0l5.603-5.6026C8.50741 30.60465 8.50741 29.97185 8.11682 29.58125zM10.99231 41.74825l-5.60249 5.6025c-.39071.3906-.39071 1.0235 0 1.4141.39059.3906 1.02339.3906 1.414 0l5.60259-5.6026c.3906-.3906.3906-1.0234 0-1.414C12.01571 41.35765 11.38291 41.35765 10.99231 41.74825z"></path>
      <path
        d="M27.28771,41.74825l-5.603,5.6025c-0.3907,0.3906-0.3907,1.0235,0,1.4141c0.3906,0.3906,1.0234,0.3906,1.414,0
        l5.60311-5.6026c0.39059-0.3906,0.39059-1.0234,0-1.414C28.31111,41.35765,27.67831,41.35765,27.28771,41.74825z"
      ></path>
      <g>
        <path d="M47.74382 1.01725L1.86641 19.02935c-.8728.3427-.9045 1.5662-.0507 1.9536l10.1422 4.6024c.2747.1248.4833.3604.5737.6482l4.3514 13.8478c.21981.6991 1.0652.9703 1.6505.5293l7.5741-5.7063c.3617-.2725.8564-.2853 1.2318-.0321l12.7029 8.5698c.6337.4274 1.4977.0648 1.6366-.6867l7.49591-40.5578C49.32611 1.37895 48.51871.71305 47.74382 1.01725zM19.94331 27.54945l-1.3686 7.7802-3.53289-11.1398 24.221-15.0333L19.94331 27.54945zM8.11682 29.58125c-.39061-.3906-1.02341-.3906-1.41411 0l-5.603 5.6025c-.3906.3907-.3906 1.0235 0 1.4141.3906.3906 1.0234.3906 1.41411 0l5.603-5.6026C8.50741 30.60465 8.50741 29.97185 8.11682 29.58125zM10.99231 41.74825l-5.60249 5.6025c-.39071.3906-.39071 1.0235 0 1.4141.39059.3906 1.02339.3906 1.414 0l5.60259-5.6026c.3906-.3906.3906-1.0234 0-1.414C12.01571 41.35765 11.38291 41.35765 10.99231 41.74825z"></path>
        <path
          d="M27.28771,41.74825l-5.603,5.6025c-0.3907,0.3906-0.3907,1.0235,0,1.4141c0.3906,0.3906,1.0234,0.3906,1.414,0
        l5.60311-5.6026c0.39059-0.3906,0.39059-1.0234,0-1.414C28.31111,41.35765,27.67831,41.35765,27.28771,41.74825z"
        ></path>
      </g>
    </svg>
  );
};
