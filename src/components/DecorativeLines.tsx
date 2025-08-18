interface DecorativeLinesProps {
  className?: string;
  type?: 'wavy' | 'dashed' | 'dotted' | 'curved';
}

const DecorativeLines = ({ className = '', type = 'wavy' }: DecorativeLinesProps) => {
  const getLinePath = () => {
    switch (type) {
      case 'wavy':
        return "M0,20 Q50,0 100,20 T200,20";
      case 'dashed':
        return "M0,20 L200,20";
      case 'dotted':
        return "M0,20 L200,20";
      case 'curved':
        return "M0,40 Q100,0 200,40";
      default:
        return "M0,20 Q50,0 100,20 T200,20";
    }
  };

  const getStrokeProps = () => {
    switch (type) {
      case 'dashed':
        return { strokeDasharray: "10,5" };
      case 'dotted':
        return { strokeDasharray: "2,5" };
      default:
        return {};
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <svg width="100%" height="60" viewBox="0 0 200 40" className="overflow-visible">
        <path
          d={getLinePath()}
          stroke="#5a453a"
          strokeWidth="2"
          fill="none"
          {...getStrokeProps()}
        />
        
        {/* Decorative dots along the line */}
        {type === 'wavy' && (
          <>
            <circle cx="25" cy="15" r="2" fill="#8b6d5a" />
            <circle cx="75" cy="25" r="2" fill="#8b6d5a" />
            <circle cx="125" cy="15" r="2" fill="#8b6d5a" />
            <circle cx="175" cy="25" r="2" fill="#8b6d5a" />
          </>
        )}
      </svg>
    </div>
  );
};

export default DecorativeLines;