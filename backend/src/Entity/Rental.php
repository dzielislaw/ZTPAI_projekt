<?php

namespace App\Entity;

use App\Repository\RentalRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RentalRepository::class)]
class Rental
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'rentals')]
    #[ORM\JoinColumn(nullable: false)]
    private ?ToolInstance $toolInstance = null;

    #[ORM\ManyToOne(inversedBy: 'rentals')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $Client = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getToolInstance(): ?ToolInstance
    {
        return $this->toolInstance;
    }

    public function setToolInstance(?ToolInstance $toolInstance): static
    {
        $this->toolInstance = $toolInstance;

        return $this;
    }

    public function getClient(): ?User
    {
        return $this->Client;
    }

    public function setClient(?User $Client): static
    {
        $this->Client = $Client;

        return $this;
    }
}
