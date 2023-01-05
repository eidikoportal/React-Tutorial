import React from 'react'

export default function Warning(props) {
    if (!props.warn) {
        return null;
      }
    
      return (
        <div className="alert alert-warning">
          Warning!
        </div>
      );
}
