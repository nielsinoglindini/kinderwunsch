import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon, CheckCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  if (!isOpen) return null;

  // --- Calendar Logic ---
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  
  // Adjust for Monday as first day of week (0 = Monday, 6 = Sunday)
  const startingDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; 

  const monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
  const dayNames = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    // Don't allow weekends
    if (newDate.getDay() === 0 || newDate.getDay() === 6) return;
    // Don't allow past dates
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (newDate < today) return;
    
    setSelectedDate(newDate);
    setStep(2);
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || date.getDay() === 0 || date.getDay() === 6;
  };

  // --- Time Slot Logic ---
  const availableTimes = ["09:00", "10:30", "13:00", "14:30", "16:00"];

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    setStep(3);
  };

  // --- Form Logic ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep(4);
    }, 800);
  };

  const handleClose = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ name: '', email: '', phone: '', notes: '' });
    onClose();
  };

  return (
    <div className="booking-modal-overlay" onClick={handleClose}>
      <div className="booking-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="booking-modal-close" onClick={handleClose}>
          <X size={24} />
        </button>

        <div className="booking-modal-header">
          <h2>Kostenloses Erstgespräch</h2>
          {step < 4 && <p className="booking-modal-subtitle">Dauer: 30 Minuten • Online via Zoom</p>}
        </div>

        <div className="booking-modal-body">
          {/* STEP 1: Date Selection */}
          {step === 1 && (
            <div className="booking-step booking-calendar-step animate-fade-in">
              <div className="calendar-header">
                <button onClick={handlePrevMonth} className="calendar-nav-btn"><ChevronLeft size={20} /></button>
                <h3>{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h3>
                <button onClick={handleNextMonth} className="calendar-nav-btn"><ChevronRight size={20} /></button>
              </div>
              
              <div className="calendar-grid">
                {dayNames.map(day => (
                  <div key={day} className="calendar-day-name">{day}</div>
                ))}
                
                {Array.from({ length: startingDay }).map((_, i) => (
                  <div key={`empty-${i}`} className="calendar-day empty"></div>
                ))}
                
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const disabled = isDateDisabled(day);
                  const isToday = new Date().getDate() === day && new Date().getMonth() === currentMonth.getMonth() && new Date().getFullYear() === currentMonth.getFullYear();
                  
                  return (
                    <button
                      key={day}
                      className={`calendar-day ${disabled ? 'disabled' : ''} ${isToday ? 'today' : ''}`}
                      disabled={disabled}
                      onClick={() => handleDateClick(day)}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Time Selection */}
          {step === 2 && selectedDate && (
            <div className="booking-step booking-time-step animate-fade-in">
              <button className="back-button" onClick={() => setStep(1)}>
                <ChevronLeft size={16} /> Zurück zum Kalender
              </button>
              
              <div className="selected-date-display">
                <CalendarIcon size={18} />
                <span>{selectedDate.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              
              <h3 className="time-select-title">Verfügbare Zeiten:</h3>
              <div className="time-slots">
                {availableTimes.map(time => (
                  <button 
                    key={time} 
                    className="time-slot-btn"
                    onClick={() => handleTimeClick(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Form */}
          {step === 3 && selectedDate && selectedTime && (
            <div className="booking-step booking-form-step animate-fade-in">
               <button className="back-button" onClick={() => setStep(2)}>
                <ChevronLeft size={16} /> Zurück zur Uhrzeit
              </button>
              
              <div className="booking-summary">
                <div className="summary-item">
                  <CalendarIcon size={16} />
                  <span>{selectedDate.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <div className="summary-item">
                  <Clock size={16} />
                  <span>{selectedTime} Uhr</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Ihr Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-Mail</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="Ihre E-Mail-Adresse" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefon (optional)</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Für Rückfragen" />
                </div>
                <div className="form-group">
                  <label htmlFor="notes">Nachricht (optional)</label>
                  <textarea id="notes" name="notes" rows={3} value={formData.notes} onChange={handleInputChange} placeholder="Möchten Sie mir vorab etwas mitteilen?"></textarea>
                </div>
                <button type="submit" className="button button-primary w-full" style={{ marginTop: '16px' }}>
                  Termin verbindlich anfragen
                </button>
              </form>
            </div>
          )}

          {/* STEP 4: Success */}
          {step === 4 && (
            <div className="booking-step booking-success-step animate-fade-in">
              <div className="success-icon-wrapper">
                <CheckCircle size={48} color="var(--color-primary)" />
              </div>
              <h3>Vielen Dank für Ihre Anfrage!</h3>
              <p>Ihr Termin für das kostenlose Erstgespräch am <strong>{selectedDate?.toLocaleDateString('de-DE', { day: 'numeric', month: 'long' })} um {selectedTime} Uhr</strong> wurde erfolgreich reserviert.</p>
              <p className="success-subtext">Sie erhalten in Kürze eine Bestätigung per E-Mail mit allen weiteren Informationen zum Zoom-Meeting.</p>
              
              <button className="button button-outline w-full" onClick={handleClose} style={{ marginTop: '24px' }}>
                Schließen
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
